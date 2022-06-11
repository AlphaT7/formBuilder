FROM node:alpine
RUN apk add git
RUN git config --global user.name "AlphaT7"
RUN git config --global user.email " 7742643+AlphaT7@users.noreply.github.com"
EXPOSE 3000