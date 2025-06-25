import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { MongooseModule } from '@nestjs/mongoose';
import PropertySchema from '../../schemas/Property.model';
import { MemberModule } from '../member/member.module';
import { PropertyModule } from '../property/property.module';
import { AuthModule } from '../auth/auth.module';
import { BoardArticleModule } from '../board-article/board-article.module';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]), //MVC
		AuthModule,
		MemberModule,
		PropertyModule,
		BoardArticleModule,
	],
	providers: [CommentResolver, CommentService],
})
export class CommentModule {}
