CREATE DATABASE ecomer;
USE ecomer;

CREATE  TABLE categoria (
    Idcategoria BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255)
);

CREATE TABLE tipopago (
    Idtipopago BIGINT PRIMARY KEY AUTO_INCREMENT,
    tipo_pago VARCHAR(255)
);
CREATE TABLE persona (
    Idpersona BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    telefono1 BIGINT,
    telefono2 BIGINT,
    fk_idtipopago BIGINT,
    FOREIGN KEY (fk_idtipopago) REFERENCES tipopago(Idtipopago)
);
CREATE  TABLE producto (
    Idproducto BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    precio DECIMAL(10, 2),
    stock INT,
    fk_idcategoria BIGINT,
    FOREIGN KEY (fk_idcategoria) REFERENCES categoria(Idcategoria)
);

