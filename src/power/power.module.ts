import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],// things that can be used as dependencies for other classes
  exports: [PowerService], // here i tell the dependency injection system that i want to exports i want to make a copy of the powerService available to other modules

})
export class PowerModule {}
