FROM oven/bun:latest
WORKDIR /app

COPY . .
RUN bun install

ENV NODE_ENV=production

EXPOSE 3000/tcp

RUN bun run build
ENTRYPOINT [ "bun", "run", "start" ]

LABEL org.opencontainers.image.source=https://github.com/jeamxn/portfolio-jeamxn