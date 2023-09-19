import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose'

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

    @Prop()
    etablissement: string;

    @Prop()
    prof: string;

    @Prop()
    mission: string;

    @Prop()
    classes: any[];

    @Prop()
    tableauDeService: any[];

    @Prop()
    cycles: any[];

    @Prop()
    place: Place

}

export const UserSchema = SchemaFactory.createForClass(User)