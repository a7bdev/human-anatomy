#!/bin/bash
# مشغّل خلفي: يكمّل أدوية EML الناقصة عبر rx-worker.sh، ٣ عمّال بالتوازي، قابل للاستئناف.
cd /root/anatomy-work || exit 1
MAN=rx/logs/rx-manifest.tsv
LOG=rx/logs/driver.log
MAXJ=3
echo "=== DRIVER START $(date '+%F %T') — $(wc -l < "$MAN") batches, maxjobs=$MAXJ ===" >> "$LOG"
while IFS=$'\t' read -r tag n list; do
  [ -z "$tag" ] && continue
  if [ -f "rx/index-$tag.js" ] && node --check "rx/index-$tag.js" 2>/dev/null \
     && [ -f "rx/rx-$tag.js" ] && node --check "rx/rx-$tag.js" 2>/dev/null; then
    echo "SKIP  $tag (exists+valid) $(date '+%T')" >> "$LOG"; continue
  fi
  while [ "$(jobs -r | wc -l)" -ge "$MAXJ" ]; do sleep 15; done
  echo "LAUNCH $tag ($n drugs) $(date '+%T')" >> "$LOG"
  ./rx-worker.sh "$tag" "$list" &
  sleep 8
done < "$MAN"
wait
ok=0
for f in rx/index-*.js; do node --check "$f" 2>/dev/null && ok=$((ok+1)); done
echo "=== DRIVER DONE $(date '+%F %T') — valid index files: $ok ===" >> "$LOG"
