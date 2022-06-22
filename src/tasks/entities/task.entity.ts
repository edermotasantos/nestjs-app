import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  nome: string;

  @Prop()
  data_de_execucao: Date;

  @Prop()
  situacao: string;

  @Prop()
  prioridade: string;

  @Prop()
  data_de_conclusao: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
