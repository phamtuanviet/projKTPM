import { Module } from '@nestjs/common';
import { FlightSeatService } from './flightSeat.service';
import { FlightController } from '../flight/flight.controller';

@Module({
  imports: [],
  controllers: [FlightController],
  providers: [FlightSeatService],
})
export class FlightSeatModule {}
