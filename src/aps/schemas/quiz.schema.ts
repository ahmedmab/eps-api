import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'
import * as mongoose from 'mongoose';

@Schema()
class Quiz {
    @Prop()
    aps: string;
}




export const QuizSchema = SchemaFactory.createForClass(Quiz)