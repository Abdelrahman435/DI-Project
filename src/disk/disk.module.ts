import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], // then any thing inside the diskModule can import any thige that gets exported from powerModule
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}
