import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';

@Module({
  imports:[CpuModule, DiskModule], // here i add access to computer controller to cpu service and disk service 
  controllers: [ComputerController],
})
export class ComputerModule {}
