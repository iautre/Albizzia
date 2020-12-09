FROM autrec/node
LABEL maintainer="mo@autre.cn"

COPY . /var/app/

RUN set -x \
    npm install \
    npm run build

EXPOSE 3000
CMD ["npm","start","daemon off;"]