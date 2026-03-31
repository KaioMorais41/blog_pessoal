import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable() 
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem> // Injeção de dependencia 
    ){}

                // Esta prometendo retornar algo, que seria Postagem 
    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); // SELECT * FROM tb_postagem;
            // await esta aguardando a promessa. 
    }


}