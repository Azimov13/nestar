import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WithoutGuard } from 'apps/nestar-api/src/components/auth/guards/without.guard';
import { MemberService } from './member.service';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import {
	AgentsInquiry,
	LoginInput,
	MemberInput,
} from '../../libs/dto/member/member.input';
import { Member, Members } from '../../libs/dto/member/member';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthModule } from '../auth/auth.module';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { Roles } from '../auth/decorators/roles.decorator';
import { MemberType } from '../../libs/enums/member.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { MemberUpdate } from '../../libs/dto/member/member.update';
import { shapeIntoMongoObjectId } from '../../libs/config';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	@UsePipes(ValidationPipe)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('Mutsation: signup');
		return this.memberService.signup(input);
	}

	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation: login');
		return this.memberService.login(input);
	}

	@UseGuards(AuthGuard)
	@Query(() => String)
	public async checkAuthRoles(@AuthMember() authMember: Member): Promise<string> {
		console.log('Query: checkAuthRoles');
		return `HI ${authMember.memberNick}, you are ${authMember.memberType} (memberId: ${authMember._id})`;
	}
	@UseGuards(WithoutGuard)
	@Query(() => Member)
	public async getMember(
		@Args('memberId') input: string,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Member> {
		console.log('Query: getMember');
		console.log('memberId:', memberId);
		const targetId = shapeIntoMongoObjectId(input);
		return this.memberService.getMember(memberId, targetId);
	}

	@UseGuards(AuthGuard)
	@Mutation(() => Member)
	public async updateMember(
		@Args('input') input: MemberUpdate,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Member> {
		console.log('Mutation: updateMember');
		delete input._id;
		return this.memberService.updateMember(memberId, input);
	}

	@UseGuards(AuthGuard)
	@Query(() => String)
	public async checkAuth(
		@AuthMember('memberNick') memberNick: string,
	): Promise<string> {
		console.log('Query: checkAuth');
		console.log('memberNick:', memberNick);
		return `HI ${memberNick}`;
	}

	@UseGuards(WithoutGuard)
	@Query(() => Members)
	public async getAgents(
		@Args('input') input: AgentsInquiry,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Members> {
		console.log('Query: getAgents');
		return this.memberService.getAgents(memberId, input);
	}

	//**ADMIN */

	//Authorization:ADMIN
	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => String)
	public async getAllMembersByAdmin(): Promise<string> {
		return this.memberService.getAllMembersByAdmin();
	}

	@Mutation(() => String)
	public async updateMemberByAdmin(): Promise<string> {
		console.log('Mutation: updateMemberByAdmin');

		return this.memberService.updateMemberByAdmin();
	}
}
