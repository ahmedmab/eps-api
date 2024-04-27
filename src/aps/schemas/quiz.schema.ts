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
    @Prop({ required: true, default: 'fr' })
    lang: 'fr' | 'ar';

    @Prop({ required: true })
    createdBy: string;

    @Prop()
    updatedBy: string;

    @Prop({ required: true })
    apsId: number;

    @Prop({ required: true })
    apsName: string;

    @Prop({ required: true })
    nvId: number;

    @Prop({ required: true })
    nvName: string;

    @Prop({ required: true })
    difficulty: number;

    @Prop({ required: true })
    question: string;

    @Prop({ type: [], required: true })
    reponses: Reponse[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz)