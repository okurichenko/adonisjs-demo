FROM node
RUN npm i -g adonis-cli
RUN export PATH=$PATH:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
CMD cd /usr/src/app/ && npm run dev
