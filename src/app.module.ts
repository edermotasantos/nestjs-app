import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
