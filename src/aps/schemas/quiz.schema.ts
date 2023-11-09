import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

@Schema({ _id: false })
class Reponse {
    @Prop()
    id: number;
    @Prop()
    text: string;
    @Prop()
    isTrue: boolean;
}

export @Schema()
class Quiz {
    @Prop({ required: true })
    aps: string;

    @Prop({ required: true })
    question: string;

    @Prop({ type: [], required: true })
    reponses: Reponse[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz)