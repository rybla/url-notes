#!/bin/zsh

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] begin"

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] pull remote changes"
git pull -X theirs

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] update input"
bun run script/fetch-articles.ts
git add input && git commit -m"added new feeds" && git push

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] update articles"
bun run script/filter-articles.ts
bun run script/process-articles.ts

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] build site"
bun run build

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] deploy site"
bun run deploy

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] end"
