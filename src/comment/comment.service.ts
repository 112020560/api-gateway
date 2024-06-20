import { Inject, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class CommentService {
  constructor(@Inject('COMMENT_SERVICE') private client: ClientKafka){}
  create(createCommentDto: UpdateCommentDto) {
    this.client.emit('create_comment', JSON.stringify(createCommentDto));
  }

  // findAll() {
  //   return `This action returns all comment`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} comment`;
  // }

  // update(id: number, updateCommentDto: UpdateCommentDto) {
  //   return `This action updates a #${id} comment`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} comment`;
  // }
}
