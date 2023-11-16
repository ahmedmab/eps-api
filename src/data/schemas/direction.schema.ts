import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

export @Schema()
class Direction {
    @Prop()
    id: number;
    @Prop()
    name: string;
}

export const DirectionSchema = SchemaFactory.createForClass(Direction)