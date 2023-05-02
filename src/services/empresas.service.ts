import { Empresa } from './../entities/empresa.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpresasService {
  private empresas: Empresa[] = [];

  list(): Empresa[] {
    return this.empresas;
  }

  findOne(idEmpresa: number): Empresa {
    const empresa = this.list().filter((e) => e.idEmpresa == idEmpresa);
    return empresa[0] || null;
  }

  create(payload: Empresa): Empresa {
    const empresa = new Empresa(
      payload.idEmpresa,
      payload.tipoIdentificacion,
      payload.nombre,
    );
    this.empresas.push(empresa);
    return empresa;
  }

  update(idEmpresa: number, payload: Empresa): any {
    let empresa = {};
    this.empresas.forEach((e) => {
      if (e.idEmpresa == idEmpresa) {
        e.nombre = payload.nombre;
        e.tipoIdentificacion = payload.tipoIdentificacion;
        empresa = e;
      }
    });
    return empresa;
  }
}
