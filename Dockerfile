#FROM node:alpine as builder
#ENV PORT=3000
#ENV NITRO_PORT=3000
#WORKDIR /app
#COPY . /app
#RUN set -x \
#    && ls -la \
#    && sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
#    && apk update && apk upgrade \
#    && apk --no-cache add tzdata \
#    && npm install pnpm -g \
#    && pnpm install \
#    && pnpm build
#
##
### production stage
##FROM node:alpine as production
##
##ENV PORT=3000
##ENV NITRO_PORT=3000
##
##COPY --from=builder /app/.output /
##COPY --from=builder /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
##EXPOSE 3000
##ENTRYPOINT ["pnpm", "start"]
##
FROM node:alpine as production

ENV PORT=3000
ENV NITRO_PORT=3000

WORKDIR /app
COPY .output /app
EXPOSE 3000
ENTRYPOINT ["node", "server/index.mjs"]
