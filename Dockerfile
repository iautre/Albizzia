FROM autrec/node

COPY . /var/app/

WORKDIR /var/app

RUN set -x \
    && npm install \
    && npm run build

#开放端口
EXPOSE 3000
CMD ["npm","start"]