import { FechasLibService } from '@app/fechas-lib';
import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';


@Controller()
export class AppController {
  constructor(private fechasLibService: FechasLibService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo...';
  }

  @Get(':dias')
  agregarDias(@Param('dias') numeroDiasAgregar): Date {
    return this.fechasLibService.sumarDias(numeroDiasAgregar);
  }
}
