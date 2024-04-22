import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

export @Schema()
class Observable {

    @Prop({ required: true })
    apsId: number;

    @Prop({ required: false })
    nvId: number;

    @Prop({ required: true })
    text: string;
}

export const ObservableSchema = SchemaFactory.createForClass(Observable)