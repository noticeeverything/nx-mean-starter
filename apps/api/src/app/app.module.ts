import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { TodosModule } from './todos/todos.module';

@Module({
	imports: [
		MongooseModule.forRoot(environment.database.uri, environment.database.options),
		TodosModule
	]
})
export class AppModule {}
