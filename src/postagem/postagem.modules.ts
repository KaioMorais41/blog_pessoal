import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],  // Importa a postagem como uma entidade TypeORM
    providers: [PostagemService], // Define o PostagemService como um provedor 
    controllers: [PostagemController], // Define o PostagemController como um controlador 
    exports: [TypeOrmModule] // Exporta o TypeOrmModule
})
export class PostagemModule {}
 