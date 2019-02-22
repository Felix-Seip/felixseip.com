FROM openjdk:8

RUN mkdir app
COPY ./target ./app
RUN chmod 777 ./app
WORKDIR app
CMD [ "java", "-jar", "/app/api-0.0.1-SNAPSHOT.jar" ]
