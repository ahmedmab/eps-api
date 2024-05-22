import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'
import * as mongoose from 'mongoose';

@Schema({ _id: false })
class Competence {
    @Prop()
    id: number;
    @Prop()
    name: string;
}

@Schema({ _id: false })
class Module {
    @Prop()
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Competence' })
    competences: Competence[];
}


@Schema()
export class Niveau {
    @Prop()
    nvId: number;

    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true, unique: true })
    longName: string;

    @Prop({ required: true, unique: true })
    oti: string;

    @Prop()
    module1: Module[];

    @Prop()
    module2: Module[];

}


export const NiveauSchema = SchemaFactory.createForClass(Niveau)