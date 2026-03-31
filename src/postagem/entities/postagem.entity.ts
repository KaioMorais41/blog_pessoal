import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagem' }) // Cria a tabela no banco de dados chamada tb_postagem
export class Postagem {
  @PrimaryGeneratedColumn() // Cria uma chave primaria e auto increment
  id!: number;

  @IsNotEmpty() // Verifica se o campo esta vazio
  @Column({ length: 255, nullable: false }) // Cria uma coluna chamada titulo, com 255 caracteres e nao pode ser nulo
  titulo!: string;

  @IsNotEmpty()
  @Column()
  texto!: string;

  @UpdateDateColumn() // Cria uma coluna chamada data atualização da postagem
  data!: Date;
}
