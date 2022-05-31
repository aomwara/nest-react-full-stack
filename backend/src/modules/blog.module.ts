import { Module } from '@nestjs/common';
import { BlogService } from '../services/blog.service';
import { BlogController } from '../controllers/blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from '../schemas/blog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
