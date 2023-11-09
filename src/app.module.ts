import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { niveauHandler } from './middleware/niveaux.middleware';
import { cycleHandler } from './middleware/cycles.middleware';
import { classeDates } from './middleware/classeDates.middleware';
import { cycleTexte } from './middleware/cyclesTexte.middleware';
import { ApsModule } from './aps/aps.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    MongooseModule.forRoot(process.env.DB_APS_URL, { connectionName: 'aps' }),
    UsersModule,
    ApsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(niveauHandler,
        cycleHandler,
        classeDates,
        cycleTexte
      )
      //   .exclude(
      //     { path: 'users/(.*)', method: RequestMethod.GET },
      //     { path: 'users/:id', method: RequestMethod.GET },
      //     { path: 'users/:id', method: RequestMethod.DELETE },
      //   )
      // .forRoutes(UsersController);
      .forRoutes(
        { path: 'users/create', method: RequestMethod.POST },
        { path: 'users/:id', method: RequestMethod.PUT });

  }
}