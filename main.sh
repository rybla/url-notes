#!/bin/zsh

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] begin"

# pull remote changes
git pull -X theirs

# update feeds
bun run script/fetch-articles.ts

git add input/feed && git commit -m"added new feeds" && git push

# update articles
bun run script/filter-articles.ts
bun run script/process-articles.ts

# build site
bun run build

# deploy site
bun run deploy

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] end"
