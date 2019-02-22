FROM openjdk:8

RUN mkdir app
COPY ./target ./app
RUN chmod 777 ./app
WORKDIR app
CMD [ "java", "-jar", "/app/api-1.0-SNAPSHOT.jar" ]
