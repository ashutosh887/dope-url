FROM node:18-alpine

ADD package.json /tmp/package.json

RUN rm -rf build

RUN cd /tmp && yarn

# code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# define working directory
WORKDIR /src

RUN yarn build

CMD [ "node", "build/index.js" ]