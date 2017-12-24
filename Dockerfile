FROM node:9.2.0-alpine

WORKDIR /var/www/app

COPY . /var/www/app

COPY package.json /var/www/app

RUN yarn install && \
    yarn global add babel-cli && \
    yarn global add nodemon;

CMD ["yarn", "start"]
