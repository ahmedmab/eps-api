import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'
import * as mongoose from 'mongoose';

@Schema({ _id: false })
class Time {
    @Prop()
    day: string;
    @Prop()
    hour: string;
    @Prop()
    elem: string;
}

@Schema({ _id: false })
class Classe {
    @Prop()
    name: string;
    @Prop()
    nvId: number;
    @Prop()
    nvName: string;
    @Prop()
    seance: number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Time' })
    time: Time
}

@Schema({ _id: false })
class TableauDays {
    @Prop()
    day: Classe[];
}

@Schema({ _id: false })
class Cycle {
    @Prop()
    ordre: number;
    @Prop()
    apsName: string;
    @Prop()
    apsFamille: string;
    @Prop()
    startDate: string;
    @Prop()
    endDate: string;
}

@Schema({ _id: false })
class Place {
    @Prop()
    name: string;
    @Prop()
    city: string;
    @Prop()
    province: string;
    @Prop()
    region: string;
    @Prop()
    country: string;
}

@Schema({ timestamps: true })
export class User {

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop({ required: true, default: 1 })
    status: number

    @Prop()
    etablissement: string;

    @Prop()
    prof: string;

    @Prop()
    mission: string;

    @Prop({ type: [], required: true })
    classes: Classe[];

    @Prop({ type: [], required: true })
    tableauDeService: TableauDays[];

    @Prop({ type: [], required: true })
    cycles: Cycle[];

    @Prop({ type: Place, required: true })
    place: Place;

}
 

export const UserSchema = SchemaFactory.createForClass(User)