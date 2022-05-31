import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { BlogModule } from './modules/blog.module';

const MONGO_HOST = 'cluster0.0cwmr.mongodb.net';
const MONGO_DB = 'blog';
const MONGO_USER = 'mongo';
const MONGO_PASS = 'BhBd6i1iiU3IHxo3';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${MONGO_USER}:${encodeURIComponent(
        MONGO_PASS,
      )}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      },
    ),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
