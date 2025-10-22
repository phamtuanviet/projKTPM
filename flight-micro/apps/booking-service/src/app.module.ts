import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RmqModule } from './rbmq/rmq.module';
import { RedisModule } from './redis/redis.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    RmqModule.register('logging-queue'),
    RedisModule,
  ],
  controllers: [],
})
export class AppModule {}
