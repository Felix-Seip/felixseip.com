CREATE ROLE seip PASSWORD '' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;
GRANT ALL PRIVILEGES ON DATABASE felixseip_db TO seip;
CREATE TABLE blogs(
 id serial PRIMARY KEY,
 cover_img VARCHAR (500),
 title VARCHAR (50) NOT NULL,
 body VARCHAR (10000) NOT NULL,
 published_date TIMESTAMP,
 published BOOLEAN
);