import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { T } from './libs/types/common';

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			playground: true,
			uploads: false,
			autoSchemaFile: true,
			formatError: (error: T) => {
				console.log('error:', error);
				const garphQLFormattedError = {
					code: error?.extensions.code,
					message: error?.extensions?.exception?.message || error?.extensions?.reponse?.message || error?.message,
				};
				console.log('GRAPQL GLOBAL ERR:', garphQLFormattedError);
				return garphQLFormattedError;
			},
		}),
		ComponentsModule, //HTTP
		DatabaseModule, //TCP
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
})
export class AppModule {}
