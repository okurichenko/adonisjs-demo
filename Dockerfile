FROM node
RUN export PATH=$PATH:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
ADD ./app /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install
CMD cd /usr/src/app/ && npm run dev
