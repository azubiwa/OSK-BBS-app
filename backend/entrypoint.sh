#!/bin/bash
set -e

# Rails が使うディレクトリを作成＆書き込み可能に
mkdir -p /rails/tmp/cache /rails/tmp/pids /rails/tmp/sockets /rails/log
chmod -R 777 /rails/tmp /rails/log

# 最後に渡されたコマンドを実行
exec "$@"