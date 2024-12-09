import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService],// here i tell the dependency injection system that i want to exports i want to make a copy of the powerService available to other modules
})
export class CpuModule {}
