FROM node
RUN npm i -g adonis-cli
RUN export PATH=$PATH:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
RUN cp /usr/src/app/.env.example /usr/src/app/.env
RUN cd /usr/src/app/ && ./ace db:seed
CMD cd /usr/src/app/ && npm run dev
