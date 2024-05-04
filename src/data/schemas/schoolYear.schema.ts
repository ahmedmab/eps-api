import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

export @Schema()
class SchoolYear {
    @Prop()
    startDate: string;
}

export const schoolYearSchema = SchemaFactory.createForClass(SchoolYear)