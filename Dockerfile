FROM ubuntu:14.04
MAINTAINER asyrique@gmail.com

RUN apt-get update

RUN apt-get install -y software-properties-common git

RUN add-apt-repository -y ppa:chris-lea/node.js

RUN apt-get update

RUN apt-get install -y nodejs build-essential

COPY . /src

RUN cd /src; npm install

RUN npm dedupe

EXPOSE 3000

WORKDIR /src

CMD ["node", "keystone.js"]
