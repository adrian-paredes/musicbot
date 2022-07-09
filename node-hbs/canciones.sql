SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS aadmin (
  AdminId int(5) NOT NULL AUTO_INCREMENT,
  AdminUserName varchar(20) DEFAULT NULL,
  AdminPassword varchar(20) DEFAULT NULL,
  PRIMARY KEY (AdminId)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

INSERT INTO aadmin(AdminId, AdminUserName, AdminPassword) VALUES 
(1, 'MainAdmin123', '&bebitofiufiu2022%');

CREATE TABLE IF NOT EXISTS musica (
  cancion_id int(10) NOT NULL AUTO_INCREMENT,
  cancion_name varchar(50) DEFAULT NULL,
  artista varchar(50) DEFAULT NULL,
  link varchar(200) DEFAULT NULL,
  emocion varchar(20) DEFAULT NULL,
  genero varchar(20) DEFAULT NULL,
  PRIMARY KEY (cancion_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;  

LOAD DATA INFILE 'musicbot - Hoja 1.csv' 
INTO TABLE musica 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS aadmin (
  AdminId int(5) NOT NULL AUTO_INCREMENT,
  AdminUserName varchar(20) DEFAULT NULL,
  AdminPassword varchar(20) DEFAULT NULL,
  PRIMARY KEY (AdminId)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

INSERT INTO aadmin(AdminId, AdminUserName, AdminPassword) VALUES 
(1, 'MainAdmin123', '&bebitofiufiu2022%');

CREATE TABLE IF NOT EXISTS musica (
  cancion_id int(10) NOT NULL AUTO_INCREMENT,
  cancion_name varchar(50) DEFAULT NULL,
  artista varchar(50) DEFAULT NULL,
  link varchar(200) DEFAULT NULL,
  emocion varchar(20) DEFAULT NULL,
  genero varchar(20) DEFAULT NULL,
  PRIMARY KEY (cancion_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;  

LOAD DATA INFILE 'musicbot - Hoja 1.csv' 
INTO TABLE musica 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
