import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'
import * as mongoose from 'mongoose';

@Schema({ _id: false })
class Seance {
    @Prop()
    dayId: number;
    @Prop()
    day: string;
    @Prop()
    time: string;
    @Prop()
    seanceOfDay: number;
}

@Schema({ _id: false })
class Groupe {
    @Prop()
    name: number;
    @Prop()
    color: number;
    @Prop()
    capitain: string;
    @Prop()
    list: string[];
}

@Schema({ _id: true })
class Student {
    @Prop()
    name: string;
    @Prop()
    naissance: string;
    @Prop()
    classe: string;
    @Prop()
    num: number;
    @Prop()
    naissanceYear: number;
    @Prop()
    responsable: boolean;
    @Prop()
    groupeName?: number;
    @Prop()
    groupeColor?: string;
    @Prop()
    maladie?: string;
    @Prop()
    genre?: string;
    @Prop()
    apsPref?: string;
    @Prop()
    fc?: number;
    @Prop()
    taille?: number;
    @Prop()
    poids?: number;
    @Prop()
    vma?: number;
    @Prop()
    vitesse?: number;
    @Prop()
    detV?: number;
    @Prop()
    detH?: number;
}

@Schema({ _id: false })
class Classe {
    @Prop()
    name: string;
    @Prop()
    nvId: number;
    @Prop()
    nvName: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seance' })
    seance1: Seance;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seance' })
    seance2: Seance;
    @Prop()
    cycles: any[];
    @Prop()
    students: Student[];
    @Prop()
    groupes: Groupe[];
}

@Schema({ _id: false })
class Cycle {
    @Prop()
    ordre: number;
    @Prop()
    apsId: number;
    @Prop()
    apsName: string;
    @Prop()
    apsFamille: string;
    @Prop()
    startDate: string;
    @Prop()
    endDate: string;
    @Prop()
    weeks: any[];
}

@Schema({ timestamps: true })
export class User {
    @Prop()
    id: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop({ required: true, unique: true })
    uid: string;

    @Prop()
    phone: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, default: 1 })
    status: number;

    @Prop()
    activationDate: Date;

    @Prop({ required: true, default: 'standard' })
    role: 'standard' | 'admin' | 'owner'

    @Prop()
    academieId: number;

    @Prop()
    academie: string;

    @Prop()
    directionId: number;

    @Prop()
    direction: string;

    @Prop()
    etablissement: string;

    @Prop()
    prof: string;

    @Prop()
    mission: string;

    @Prop({ type: [] })
    niveaux: string[];

    @Prop({ type: [] })
    classes: Classe[];

    // @Prop({ type: [], required: true })
    // tableauDeService: TableauDays[];

    @Prop({ type: [], required: true })
    cycles: Cycle[];

    @Prop({ type: [], required: true })
    cycleTexteTotal: any[]

    // @Prop({ type: Place, required: true })
    // place: Place; 

}


export const UserSchema = SchemaFactory.createForClass(User)