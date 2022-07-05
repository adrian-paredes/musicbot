SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS musica (
  cancion_id int(10) NOT NULL AUTO_INCREMENT,
  cancion_name varchar(50) DEFAULT NULL,
  artista varchar(50) DEFAULT NULL,
  link varchar(200) DEFAULT NULL,
  emocion varchar(20) DEFAULT NULL,
  genero varchar(20) DEFAULT NULL,
  PRIMARY KEY (cancion_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


INSERT INTO musica(cancion_id, cancion_name, artista, link, emocion, genero) VALUES
(1, 'Somebody That I Used To Know','Gotye','https://www.youtube.com/watch?v=8UVNT4wvIGY','tristeza','pop'),
(2, 'A man without love','Engelbert Humperdinck','https://www.youtube.com/watch?v=HQLWSC57wsE','tristeza','clasica'),
(3, 'Somethting In The Way','Nirvana','https://www.youtube.com/watch?v=4VxdufqB9zg','enojo','rock'),
(4, 'And the Waltz Goes on','Andre Rieu','https://youtu.be/M57Fi19vcSI','felicidad','clasica' ),
(5, 'Duel of the Fates','John Williams','https://www.youtube.com/watch?v=D_2bluVPsb0','sorpresa','clasica');