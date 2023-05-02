import { Controller, Get, Post, Param, HttpStatus } from '@nestjs/common';
import { Body, HttpCode } from '@nestjs/common/decorators';

@Controller('usuarios')
export class UsuariosController {
  @Get()
  usuarios() {
    return [
      { usuario: { id: 1, nombre: 'jorge', apellido: 'quintero' } },
      { usuario: { id: 2, nombre: 'william', apellido: 'lopez' } },
    ];
  }

  @Post()
  create(@Body() payload: any) {
    console.log('Se ha registrado un nuevo usuario');
    return { payload };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  usuario(@Param('id') id) {
    return { usuario: { id, nombre: 'jorge', apellido: 'quintero' } };
  }
}
