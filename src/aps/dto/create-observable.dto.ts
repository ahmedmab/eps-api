import { Type } from "class-transformer";

class Reponse {
    readonly id: number;
    readonly text: string;
    readonly isTrue: boolean;
}

export class CreateObservableDto {
    readonly lang: 'fr' | 'ar';
    readonly createdBy: string;
    readonly updatedBy: string;
    readonly apsId: number;
    readonly apsName: string;
    readonly difficulty: number;
    readonly question: string;
    @Type(() => Reponse)
    readonly reponses: Reponse[]; 
}
