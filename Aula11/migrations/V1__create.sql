create schema financas_pessoais;

create table financas_pessoais.lancamento (
    id_lancamento serial primary key,
    mes text,
    categoria text,
    tipo text,
    valor numeric
);

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Janeiro', 'Salário', 'receita', 2600);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Janeiro', 'Aluguel', 'despesa', 616);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Janeiro', 'Conta de Água', 'despesa', 47.4);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Janeiro', 'Conta de Luz', 'despesa', 91.29);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Janeiro', 'Internet', 'despesa', 105.9);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Janeiro', 'Transporte', 'despesa', 378.25);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Janeiro', 'Lazer', 'despesa', 148.27);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Salário', 'receita', 2600);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Aluguel', 'despesa', 616);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Conta de Água', 'despesa', 88.7);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Conta de Luz', 'despesa', 163.94);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Internet', 'despesa', 105.9);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Transpote', 'despesa', 357.21);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Alimentação', 'despesa', 780);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Fevereiro', 'Farmácia', 'despesa', 116.77);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Salário', 'receita', 3500);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Aluguel', 'despesa', 648.64);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Conta de Água', 'despesa', 71);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Conta de Luz', 'despesa', 134.2);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Internet', 'despesa', 105.9);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Transporte', 'despesa', 450.35);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Lazer', 'despesa', 158);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Março', 'Alimentação', 'despesa', 960);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Salário', 'receita', 3500);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Aluguel', 'despesa', 648.64);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Conta de Água', 'despesa', 68);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Conta de Luz', 'despesa', 115.2);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Internet', 'despesa', 105.9);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Transporte', 'despesa', 317.84);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Lazer', 'despesa', 97);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('Abril', 'Alimentação', 'despesa', 990);
