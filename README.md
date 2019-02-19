# felixseip.com
This is the code base for my personal website

The website is written using the following technology:
- ReactJS 
- Java with Spring Boot
- Docker 

# Architecture of this Project
The architecture of this website is based on the microservice architecture. 
The components of the website are split into several pieces that can be replicated and scaled to meet the required amount of services needed to handle the traffic. 
The project is split into three logical components:
- Front-end 
- REST API
- Back-end Database

The frontend and the REST API are packed into docker containers, that can easily be scaled. 

The described architecture looks like this:
<br/>
<br/>
<img src="https://github.com/Felix-Seip/felixseip.com/blob/master/diagrams/images/web-architecture.jpg" data-canonical-src="https://github.com/Felix-Seip/felixseip.com/blob/master/diagrams/images/web-architecture.jpg" width="400" height="200" />
