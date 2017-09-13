create table Person (
  id bigint not null primary key identity(1,1),
  vorname varchar(255),
  nachname varchar(255)
);