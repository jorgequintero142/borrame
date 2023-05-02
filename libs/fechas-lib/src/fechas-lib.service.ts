import { Injectable } from '@nestjs/common';

@Injectable()
export class FechasLibService {
  private fecha: Date;
  constructor() {
    this.fecha = new Date();
  }

  sumarDias(diasAgregar: number): Date {
    const miliseconds = 1000 * 60 * 60 * 24 * diasAgregar;
    return new Date(this.fecha.getTime() + miliseconds);
  }
}
