import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

@Schema({ _id: false })
class Situation {
    @Prop()
    but: string;
    @Prop()
    condition_de_realisation: string[];
    @Prop()
    criteres_de_realisation: string[];
    @Prop()
    criteres_de_reussite: string[];
    @Prop()
    consignes: string[];
    @Prop()
    variables_de_regulation: string[]
}

@Schema({ _id: false })
class Lesson {
    @Prop()
    objectif: string;
    @Prop()
    situations: Situation[];
}

@Schema({ _id: false })
class Sequence {
    @Prop()
    name: string;
    @Prop()
    lessons: Lesson[];
}

@Schema({ _id: false })
class Cycle {
    @Prop()
    nvId: number;
    @Prop()
    session: number;
    @Prop()
    otc: string;
    @Prop()
    sequences: Sequence[];
}

export @Schema()
class Cycles {

    @Prop({ required: true })
    apsId: number;

    @Prop({ required: true })
    apsName: string;

    @Prop({ required: true })
    apsFamille: string;

    @Prop({ type: [], required: true })
    cycles: Cycle[];
}

export const CyclesSchema = SchemaFactory.createForClass(Cycles)