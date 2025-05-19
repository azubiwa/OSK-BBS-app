# frontend/Dockerfile

FROM node:20-alpine

WORKDIR /app

# 依存関係定義をコピーしてインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# ポート開放
EXPOSE 3000

# 開発モードで起動
CMD ["npm", "run", "dev"]
