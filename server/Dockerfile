FROM node:18-alpine

ADD package.json /tmp/package.json

RUN rm -rf build

# RUN npm i -g yarn

RUN cd /tmp && yarn

# code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# define working directory
WORKDIR /src

RUN yarn build

# RUN yarn global add pm2

EXPOSE 4000

# node emd is run through env consul in envconsul-launch
# CMD [ "pm2-runtime", "process.json" ]
CMD [ "node", "build/index.js" ]