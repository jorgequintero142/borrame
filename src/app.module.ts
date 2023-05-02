import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PersonasController } from './controllers/personas.controller';
import { UsuariosController } from './controllers/usuarios.controller';
import { EmpresasController } from './controllers/empresas.controller';
import { EmpresasService } from './services/empresas.service';
import { FechasLibModule } from '@app/fechas-lib';

@Module({
  imports: [FechasLibModule],
  controllers: [
    AppController,
    PersonasController,
    UsuariosController,
    EmpresasController,
  ],
  providers: [EmpresasService],
})
export class AppModule {}
