import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { classeHandler } from './middleware/classes.middleware';
import { UsersController } from './users/users.controller';
import { cycleHandler } from './middleware/cycles.middleware';
import { tableauDeServiceHandler } from './middleware/tableauDeService.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(classeHandler,
        cycleHandler,
        tableauDeServiceHandler)
      .exclude(
        { path: 'users', method: RequestMethod.GET },
      )
      .forRoutes(UsersController);
  }
}