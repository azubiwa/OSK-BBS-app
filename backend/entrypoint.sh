#!/bin/bash
set -e

# Rails が使うディレクトリを作成＆書き込み可能に
mkdir -p /rails/tmp/cache /rails/tmp/pids /rails/tmp/sockets /rails/log
# Windows/macOS のバインドマウント環境で chmod が失敗するエラーを無視
chmod -R 777 tmp log 2>/dev/null || true

bundle exec rails db:migrate
# 最後に渡されたコマンドを実行
exec "$@"