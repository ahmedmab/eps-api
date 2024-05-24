class Competence {
    readonly id: number;
    readonly name: string;
}
class Module {
    readonly name: string;
    readonly competences: Competence[];
}

export class CreateNiveauDto {
    readonly nvId: number;
    readonly name: string;
    readonly longName: string;
    readonly oti: string;
    readonly module1: Module;
    readonly module2: Module;
}