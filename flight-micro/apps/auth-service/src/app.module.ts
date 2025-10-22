import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/auth.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule {}
