# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table favorito (
  id                            bigint auto_increment not null,
  resposta_id                   bigint,
  usuario_id                    bigint,
  constraint pk_favorito primary key (id)
);

create table resposta (
  id                            bigint auto_increment not null,
  mensagem                      varchar(255),
  topico_id                     bigint,
  autor_id                      bigint,
  constraint pk_resposta primary key (id)
);

create table topico (
  id                            bigint auto_increment not null,
  titulo                        varchar(255),
  autor_id                      bigint,
  constraint pk_topico primary key (id)
);

create table usuario (
  id                            bigint auto_increment not null,
  nome                          varchar(255),
  email                         varchar(255),
  senha                         varchar(255),
  constraint uq_usuario_email unique (email),
  constraint pk_usuario primary key (id)
);

alter table favorito add constraint fk_favorito_resposta_id foreign key (resposta_id) references resposta (id) on delete restrict on update restrict;
create index ix_favorito_resposta_id on favorito (resposta_id);

alter table favorito add constraint fk_favorito_usuario_id foreign key (usuario_id) references usuario (id) on delete restrict on update restrict;
create index ix_favorito_usuario_id on favorito (usuario_id);

alter table resposta add constraint fk_resposta_topico_id foreign key (topico_id) references topico (id) on delete restrict on update restrict;
create index ix_resposta_topico_id on resposta (topico_id);

alter table resposta add constraint fk_resposta_autor_id foreign key (autor_id) references usuario (id) on delete restrict on update restrict;
create index ix_resposta_autor_id on resposta (autor_id);

alter table topico add constraint fk_topico_autor_id foreign key (autor_id) references usuario (id) on delete restrict on update restrict;
create index ix_topico_autor_id on topico (autor_id);


# --- !Downs

alter table favorito drop foreign key fk_favorito_resposta_id;
drop index ix_favorito_resposta_id on favorito;

alter table favorito drop foreign key fk_favorito_usuario_id;
drop index ix_favorito_usuario_id on favorito;

alter table resposta drop foreign key fk_resposta_topico_id;
drop index ix_resposta_topico_id on resposta;

alter table resposta drop foreign key fk_resposta_autor_id;
drop index ix_resposta_autor_id on resposta;

alter table topico drop foreign key fk_topico_autor_id;
drop index ix_topico_autor_id on topico;

drop table if exists favorito;

drop table if exists resposta;

drop table if exists topico;

drop table if exists usuario;

