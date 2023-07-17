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

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nhan';

/*
Create table posts
(
	id int auto_increment primary key,
    title varchar(255) not null,
    `desc` varchar(1000) not null,
    img varchar(255) not null,
    date datetime,
    uid int,
    cat varchar(45),
    foreign key (uid) references user(id) ON DELETE CASCADE ON UPDATE CASCADE
);
*/

