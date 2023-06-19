FROM node:16.11.0-alpine3.14

ENV BASE_URL http://coding-server:8080
ENV BROWSER_BASE_URL https://coding.autre.cn/api

COPY . /var/app/

WORKDIR /var/app

RUN set -x \
    && yarn install \
    && yarn build

#开放端口
EXPOSE 3000
CMD ["yarn","start"]