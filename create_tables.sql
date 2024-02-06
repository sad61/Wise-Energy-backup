-- create_tables.sql

-- Criação da tabela Notificacoes
CREATE TABLE Notificacoes (
    id serial PRIMARY KEY,
    date timestamp NOT NULL,
    header char(50) NOT NULL,
    message char(50) NOT NULL
);

-- Criação da tabela Equipamento
CREATE TABLE Equipamento (
    id serial PRIMARY KEY,
    model char(50) NOT NULL,
    nickname char(50) NOT NULL,
    serial_number char(50) NOT NULL,
    consumption char(50) NOT NULL,
    budget char(50) NOT NULL
);

-- Criação da tabela Usuarios
CREATE TABLE Usuarios (
    id serial PRIMARY KEY,
    notificacao_id int REFERENCES Notificacoes(id),
    equipamento_id int REFERENCES Equipamento(id),
    name char(50) NOT NULL,
    email char(50) NOT NULL,
    telefone char(50) NOT NULL,
    password char(50) NOT NULL,
    birthdate char(50) NOT NULL
);

-- Criação da tabela Medicoes
CREATE TABLE Medicoes (
    id serial PRIMARY KEY,
    header char(50) NOT NULL,
    message char(50) NOT NULL
);

-- Criação da tabela Relatorios
CREATE TABLE Relatorios (
    id serial PRIMARY KEY,
    order_id int NOT NULL,
    shipment_date date NOT NULL
);
