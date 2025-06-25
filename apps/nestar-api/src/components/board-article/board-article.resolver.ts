import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardArticleService } from './board-article.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ObjectId } from 'mongoose';
import { BoardArticleInput } from '../../libs/dto/board-article/board-article.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { UseGuards } from '@nestjs/common';
import { BoardArticle } from '../../libs/dto/board-article/board-article';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { WithoutGuard } from '../auth/guards/without.guard';
import { BoardArticleUpdate } from '../../libs/dto/board-article/board-article.update';

@Resolver()
export class BoardArticleResolver {
	constructor(private readonly boardArticleService: BoardArticleService) {}

	@UseGuards(AuthGuard)
	@Mutation((returns) => BoardArticle)
	public async createBoardArticle(
		@Args('input') input: BoardArticleInput,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<BoardArticle> {
		console.log('Muatation: createBoardArticle');
		return await this.boardArticleService.createBoardArticle(memberId, input);
	}

	@UseGuards(WithoutGuard)
	@Query((returns) => BoardArticle) //Auth bolgan yoki bomagan member ishlata oladi DTO bilan QImayt qaytaradi
	public async getBoardArticle(
		@Args('articleId') input: string, //string value qaytaradi
		@AuthMember('_id') memberId: ObjectId, //Auth bolgan bolsa memberId bolmagan bolsa null ni qaytaradi //without guard.ts da hosil qilib olganmiz
	): Promise<BoardArticle> {
		console.log('Query: Property');
		const articleId = shapeIntoMongoObjectId(input); //articleid ni stringdan objectid aylantiryamiz
		return await this.boardArticleService.getBoardArticle(memberId, articleId);
	}

	@UseGuards(AuthGuard)
	@Mutation((returns) => BoardArticle)
	public async updateBoardArticle(
		@Args('input') input: BoardArticleUpdate,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<BoardArticle> {
		console.log('Muatation: updateBoardArticle');
		input._id = shapeIntoMongoObjectId(input._id);
		return await this.boardArticleService.updateBoardArticle(memberId, input);
	}
}
