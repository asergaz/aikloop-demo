#!/bin/sh
# Builds for this branch's address: main is the live site, any other branch <branch>.aikloopdemo-asergaz.pages.dev.
set -e
if [ -z "$CF_PAGES_BRANCH" ] || [ "$CF_PAGES_BRANCH" = "main" ]; then
  base="https://aikloopdemo.asergaz.com/"
else
  alias=$(printf '%s' "$CF_PAGES_BRANCH" | tr 'A-Z' 'a-z' | sed 's/[^a-z0-9]/-/g')
  base="https://$alias.aikloopdemo-asergaz.pages.dev/"
fi
echo "Building for $base"
hugo --cleanDestinationDir --baseURL "$base"
