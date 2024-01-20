import { Type } from "class-transformer";

class Situation {
    readonly but: string;
    readonly condition_de_realisation: string[];
    readonly criteres_de_realisation: string[];
    readonly criteres_de_reussite: string[];
    readonly consignes: string[];
    readonly variables_de_regulation: string[]
}

class Lesson {
    readonly objectif: string;
    @Type(() => Situation)
    readonly situations: Situation[];
}

class Sequence {
    readonly name: string;
    @Type(() => Lesson)
    readonly lessons: Lesson[];
}

class Cycle {
    readonly nvId: number;
    readonly session: number;
    readonly otc: string;
    @Type(() => Sequence)
    readonly sequences: Sequence[];
}

export class CreateCyclesDto {
    readonly apsId: number;
    readonly apsName: string;
    readonly apsFamille: string;
    @Type(() => Cycle)
    readonly cycles: Cycle[];
}
