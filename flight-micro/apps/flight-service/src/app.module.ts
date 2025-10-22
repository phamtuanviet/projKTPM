import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AircraftModule } from './domain/aircraft/aircraft.module';
import { PrismaModule } from './prisma/prisma.module';
import { AirportModule } from './domain/airport/airport.module';
import { RmqModule } from './rbmq/rmq.module';
import { RedisModule } from './redis/redis.module';
import { FlightModule } from './domain/flight/flight.module';
import { FlightSeatModule } from './domain/flightSeat/flightSeat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AircraftModule,
    AirportModule,
    FlightModule,
    FlightSeatModule,
    PrismaModule,
    RmqModule.register('logging-queue'),
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
