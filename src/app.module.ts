import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderPackerService } from './helpers/order_pack.helper';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: '49c63cb8bebdee10752a1224f1802afe',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, OrderPackerService, JwtAuthGuard],
  exports: [AppService],
})
export class AppModule {}
