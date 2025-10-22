import { Module } from "@nestjs/common";
import { FlightService } from "./flight.service";
import { FlightController } from "./flight.controller";

@Module({
  imports: [],
  controllers: [FlightController],
    providers: [FlightService],
})
export class FlightModule {
}