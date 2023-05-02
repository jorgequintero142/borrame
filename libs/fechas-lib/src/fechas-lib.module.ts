import { Module } from '@nestjs/common';
import { FechasLibService } from './fechas-lib.service';

@Module({
  providers: [FechasLibService],
  exports: [FechasLibService],
})
export class FechasLibModule {}
