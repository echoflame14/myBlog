
create table posts(
	postId serial primary key,
	postText text,
	postTitle varchar,
	postTime varchar,
	postImgSrc varchar,
	postImgAlt varchar
);
	-- create table m(
	-- 	mId serial primary key,
	-- 	mName varchar(120),
	-- 	mEmail varchar(100),
	-- 	mText varchar(500)
	-- );
-- create table messages(
-- 	messId serial primary key,
-- 	messName varchar(60),
-- 	messEmail varchar(140),
-- 	messMess varchar(1000)
-- );
	-- drop table rest;
	-- drop table names;
	-- create table names(
	-- 	postId serial references messages(messid),
	-- 	rating int
	-- );
-- delete from messages
-- 	where messid = 14;
