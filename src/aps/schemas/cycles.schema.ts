import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

@Schema({ _id: false })
class Situation {
    @Prop()
    but: string;
    @Prop()
    description: string[];
    @Prop()
    criteres_de_realisation: string[];
    @Prop()
    criteres_de_reussite: string[];
    @Prop()
    consignes: string[];
    @Prop()
    variables_de_regulation: string[]
    @Prop()
    image: string;
}

@Schema({ _id: false })
class Lesson {
    @Prop()
    ordre: number;
    @Prop()
    objectif: string;
    @Prop()
    sequenceId: number;
    @Prop()
    sequence: string;
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

export @Schema()
class Cycle {
    @Prop()
    nvId: number;
    @Prop({ required: true })
    nvName: string;
    @Prop({ required: true })
    apsId: number;
    @Prop({ required: true })
    apsName: string;
    @Prop({ required: true })
    apsFamille: string;
    @Prop()
    otc: string;
    @Prop()
    sequences: Sequence[];
}

// export @Schema()
// class Cycles {

//     @Prop({ required: true })
//     apsId: number;

//     @Prop({ required: true })
//     apsName: string;

//     @Prop({ required: true })
//     apsFamille: string;

//     @Prop({ type: [], required: true })
//     cycles: Cycle[];
// }

export const CyclesSchema = SchemaFactory.createForClass(Cycle)