FROM autrec/node

COPY . /var/app/

RUN set -x \
    && npm install \
    && npm run build
