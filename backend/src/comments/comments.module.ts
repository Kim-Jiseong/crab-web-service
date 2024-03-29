import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './entity/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post, Comment])],
  exports: [TypeOrmModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
