import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

export @Schema()
class Academie {
    @Prop()
    id: number;
    @Prop()
    name: string;
}

export const AcademieSchema = SchemaFactory.createForClass(Academie)