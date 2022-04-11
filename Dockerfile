FROM node:alpine
RUN apk add git
WORKDIR /app
RUN cd /app
RUN git clone https://github.com/AlphaT7/formBuilder.git .
RUN npm install snowpack
EXPOSE 8080