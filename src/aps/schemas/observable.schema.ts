import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

export @Schema()
class Observable {

    @Prop({ required: true })
    apsId: number;

    @Prop({ required: true })
    apsName: string;

    @Prop({ required: false })
    nvId: number;

    @Prop({ required: true })
    nvName: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    text: string;

    @Prop({ required: true })
    createdBy: string;

    @Prop()
    updatedBy: string;
}

export const ObservableSchema = SchemaFactory.createForClass(Observable)