import { Type } from "class-transformer";

class Reponse {
    readonly id: number;
    readonly text: string;
    readonly isTrue: boolean;
}

export class CreateQuizDto {
    readonly aps: string;
    readonly question: string;
    @Type(() => Reponse)
    readonly reponses: Reponse[];
}
