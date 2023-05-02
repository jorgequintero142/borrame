import { EmpresasService } from './../services/empresas.service';
import { Empresa } from './../entities/empresa.entity';
import { Controller, Get, Post, Put } from '@nestjs/common';
import { Param, Body } from '@nestjs/common/decorators';

@Controller('empresas')
export class EmpresasController {
  constructor(private empresasService: EmpresasService) {}

  @Get()
  listAll() {
    return this.empresasService.list();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Empresa {
    return this.empresasService.findOne(id);
  }

  @Post()
  create(@Body() payload: any): Empresa {
    return this.empresasService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() payload: any) {
    return this.empresasService.update(id, payload);
  }
}
