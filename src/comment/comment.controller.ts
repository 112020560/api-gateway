import { Controller, Get, Post, Body, Patch, Param, Delete, Version, ValidationPipe } from '@nestjs/common';
import { CommentService } from './comment.service';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Comment-Controller')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Version('1')
  @Post()
  create(@Body(ValidationPipe) createCommentDto: UpdateCommentDto) {
    this.commentService.create(createCommentDto);
  }

  // @Get()
  // findAll() {
  //   return this.commentService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.commentService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
  //   return this.commentService.update(+id, updateCommentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commentService.remove(+id);
  // }
}
