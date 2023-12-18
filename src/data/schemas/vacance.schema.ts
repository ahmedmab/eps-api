import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

export @Schema()
class Vacance {
    @Prop()
    startDate: string;
    @Prop()
    endDate: string;
    @Prop()
    text: string;
}

export const VacanceSchema = SchemaFactory.createForClass(Vacance)