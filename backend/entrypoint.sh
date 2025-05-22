#!/bin/bash
set -e

# Rails が使うディレクトリを作成＆書き込み可能に
mkdir -p /rails/tmp/cache /rails/tmp/pids /rails/tmp/sockets /rails/log
chmod -R 777 tmp log 2>/dev/null || true

# DBマイグレーション（失敗したらsetupも実行）
bundle exec rake db:migrate 2>/dev/null || bundle exec rake db:setup

# 指定されたコマンドを実行
exec "$@"
