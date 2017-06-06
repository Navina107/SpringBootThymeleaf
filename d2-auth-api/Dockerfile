FROM frolvlad/alpine-oraclejdk8:slim
RUN apk update && apk add libstdc++ && rm -rf /var/cache/apk/*
EXPOSE 8080
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
VOLUME /usr/src/app
ENTRYPOINT ["./gradlew", "clean", "bootRun"]
