CREATE DATABASE IF NOT EXISTS bd_poke DEFAULT CHARACTER SET utf8 ;

USE bd_poke ;

CREATE TABLE
    usuario (
        idusuario INT NOT NULL AUTO_INCREMENT,
        usuario VARCHAR(45) NOT NULL,
        correo VARCHAR(45) NOT NULL,
        password VARCHAR(45) NOT NULL,
        PRIMARY KEY (idusuario),
        UNIQUE INDEX idusuario_UNIQUE (idusuario ASC) VISIBLE
    ) ENGINE = InnoDB;

CREATE TABLE
    producto (
        idproducto INT NOT NULL AUTO_INCREMENT,
        nomproducto VARCHAR(45) NOT NULL,
        marca VARCHAR(45) NOT NULL,
        precio NUMBER NOT NULL,
        PRIMARY KEY (idproducto),
        UNIQUE INDEX idproducto_UNIQUE (idproducto ASC) VISIBLE
    ) ENGINE = InnoDB;