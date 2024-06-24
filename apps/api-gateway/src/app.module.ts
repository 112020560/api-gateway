import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { CustomerModule } from './customer/customer.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [CommentModule, CustomerModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
