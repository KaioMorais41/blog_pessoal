import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { AuthService } from "./services/auth.services";
import { LocalStrategy } from "./strategy/local.strategy";
import { AuthController } from "./controllers/auth.controller";
import { UsuarioModule } from "../usuario/usuario.module";
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from "./constants/constant";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
 
@Module({
    imports: [
        forwardRef(()=> UsuarioModule),
        PassportModule,
        JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn : "1h"},
        }) 
        ],
        providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
        controllers: [AuthController],
        exports: [Bcrypt],
})

export class AuthModule {};
 