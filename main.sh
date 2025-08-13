echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] begin"

# update articles
bun run script/fetch-articles.ts
bun run script/process-articles.ts

# build site
bun run build

# deploy to github
git add -A
git commit -m"deploy"
git push

echo "[$(date "+%Y-%m-%d,%H:%M")] [main.sh] begin"
