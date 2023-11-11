import { Type } from "class-transformer";

class Reponse {
    readonly id: number;
    readonly text: string;
    readonly isTrue: boolean;
}

export class CreateQuizDto {
    readonly lang: 'fr' | 'ar';
    readonly apsId: number;
    readonly apsName: string;
    readonly question: string;
    @Type(() => Reponse)
    readonly reponses: Reponse[];
}
