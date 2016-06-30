

create table scenes(
scene_id INT NOT NULL AUTO_INCREMENT,
scene_name VARCHAR(20),
scene_visited int,
scene_score int,
scene_favor int,
scene_intro VARCHAR(140),
scene_wish int,
scene_x long,
scene_y long,
scene_detail VARCHAR(300),
scene_score1 int,
scene_score2 int,
scene_score3 int,
scene_score4 int,
scene_score5 int,
scene_scoreall int,
scene_type int,
PRIMARY KEY ( scene_id )
);
INSERT INTO `test`.`scenes` (`scene_name`, `scene_visited`, `scene_score`, `scene_favor`, `scene_intro`, `scene_wish`, `scene_x`, `scene_y`, `scene_detail`, `scene_score1`, `scene_score2`, `scene_score3`, `scene_score4`, `scene_score5`, `scene_scoreall`) VALUES ('zj', '3', '4', '1', 'a', '2', '123', '321', 'd', '1', '1', '1', '1', '1', '5');
INSERT INTO `test`.`scenes` (`scene_name`, `scene_visited`, `scene_score`, `scene_favor`, `scene_intro`, `scene_wish`, `scene_x`, `scene_y`, `scene_detail`, `scene_score1`, `scene_score2`, `scene_score3`, `scene_score4`, `scene_score5`, `scene_scoreall`) VALUES ('hd', '3', '4', '1', 'd', '2', '123', '321', 'dd', '1', '1', '1', '1', '1', '5');
INSERT INTO `test`.`scenes` (`scene_name`, `scene_visited`, `scene_score`, `scene_favor`, `scene_intro`, `scene_wish`, `scene_x`, `scene_y`, `scene_detail`, `scene_score1`, `scene_score2`, `scene_score3`, `scene_score4`, `scene_score5`, `scene_scoreall`) VALUES ('wjc', '3', '4', '1', 'w', '2', '123', '321', 'ddd', '1', '1', '1', '1', '1', '5');
INSERT INTO `test`.`scenes` (`scene_name`, `scene_visited`, `scene_score`, `scene_favor`, `scene_intro`, `scene_wish`, `scene_x`, `scene_y`, `scene_detail`, `scene_score1`, `scene_score2`, `scene_score3`, `scene_score4`, `scene_score5`, `scene_scoreall`) VALUES ('hpj', '3', '4', '1', 'q', '2', '123', '321', 'dddd', '1', '1', '1', '1', '1', '5');
INSERT INTO `test`.`scenes` (`scene_name`, `scene_visited`, `scene_score`, `scene_favor`, `scene_intro`, `scene_wish`, `scene_x`, `scene_y`, `scene_detail`, `scene_score1`, `scene_score2`, `scene_score3`, `scene_score4`, `scene_score5`, `scene_scoreall`) VALUES ('asd', '3', '4', '1', 'f', '2', '123', '321', 'ddddd', '1', '1', '1', '1', '1', '5');

UPDATE `test`.`scenes` SET `scene_type`='1' WHERE `scene_id`='1';
UPDATE `test`.`scenes` SET `scene_type`='1' WHERE `scene_id`='2';
UPDATE `test`.`scenes` SET `scene_type`='1' WHERE `scene_id`='3';
UPDATE `test`.`scenes` SET `scene_type`='2' WHERE `scene_id`='4';
UPDATE `test`.`scenes` SET `scene_type`='2' WHERE `scene_id`='5';


create table comments(
comment_id INT NOT NULL AUTO_INCREMENT,
scene_id INT NOT NULL,
user_id INT NOT NULL,
comment_time date,
comment_score int,
comment_type VARCHAR(20),
comment_content VARCHAR(140),
PRIMARY KEY ( comment_id )
);
INSERT INTO `test`.`comments` (`scene_id`, `user_id`, `comment_time`, `comment_score`, `comment_type`, `comment_content`) VALUES ('1', '1', '2016.11.12', '2', 'a', 'vvv');
INSERT INTO `test`.`comments` (`scene_id`, `user_id`, `comment_time`, `comment_score`, `comment_type`, `comment_content`) VALUES ('1', '2', '2016.11.12', '3', 'a', 'vvv');
INSERT INTO `test`.`comments` (`scene_id`, `user_id`, `comment_time`, `comment_score`, `comment_type`, `comment_content`) VALUES ('2', '1', '2016.11.12', '4', 'b', 'vvv');


create table pics(
pic_id INT NOT NULL AUTO_INCREMENT,
scene_id INT NOT NULL,
user_id INT NOT NULL,
pic_url VARCHAR(140),
PRIMARY KEY ( pic_id )
);
INSERT INTO `test`.`pics` (`scene_id`, `user_id`, `pic_url`) VALUES ('1', '1', 'abcde');
INSERT INTO `test`.`pics` (`scene_id`, `user_id`, `pic_url`) VALUES ('1', '2', 'abcd');
INSERT INTO `test`.`pics` (`scene_id`, `user_id`, `pic_url`) VALUES ('2', '1', 'vvv');


create table tags(
tag_id INT NOT NULL AUTO_INCREMENT,
scene_id INT NOT NULL,
tag_content VARCHAR(40),
PRIMARY KEY ( tag_id )
);

create table questions(
question_id INT NOT NULL AUTO_INCREMENT,
scene_id INT NOT NULL,
question_content VARCHAR(140),
a_content VARCHAR(140),
b_content VARCHAR(140),
c_content VARCHAR(140),
d_content VARCHAR(140),
PRIMARY KEY ( question_id )
);


create table users(
user_id INT NOT NULL AUTO_INCREMENT,
user_name VARCHAR(20),
user_password VARCHAR(20),
user_face VARCHAR(80),
user_intro VARCHAR(40),
PRIMARY KEY ( user_id )
);
INSERT INTO `test`.`users` (`user_name`, `user_password`, `user_face`, `user_intro`) VALUES ('a', 'pppppp', 'xx', 'yy');
INSERT INTO `test`.`users` (`user_name`, `user_password`, `user_face`, `user_intro`) VALUES ('b', 'vvvvvvvv', 'dd', 'ssss');
INSERT INTO `test`.`users` (`user_name`, `user_password`, `user_face`, `user_intro`) VALUES ('c', 'fffffff', 'dd', 'sss');
INSERT INTO `test`.`users` (`user_name`, `user_password`, `user_face`, `user_intro`) VALUES ('d', 'fffffff', 'ww', 'rrr');


create table usrelation(
r_id INT NOT NULL AUTO_INCREMENT,
user_id int,
scene_id int,
score int,
favor int,
visited int,
wish int,
PRIMARY KEY ( r_id )
);
INSERT INTO `test`.`usrelation` (`user_id`, `scene_id`, `score`, `favor`, `visited`, `wish`) VALUES ('1', '1', '1', '1', '1', '1');
INSERT INTO `test`.`usrelation` (`user_id`, `scene_id`, `score`, `favor`, `visited`, `wish`) VALUES ('2', '1', '1', '0', '1', '0');
INSERT INTO `test`.`usrelation` (`user_id`, `scene_id`, `score`, `favor`, `visited`, `wish`) VALUES ('3', '1', '0', '1', '0', '1');

create table bugs(
bug_id INT NOT NULL AUTO_INCREMENT,
bug_time date,
bug_content VARCHAR(140),
PRIMARY KEY ( bug_id )
);
