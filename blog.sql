Create database blog;

Use blog;

Create table user 
(
	id int auto_increment primary key,
    username varchar(45) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    img varchar(255) null
);

-- drop table user;

