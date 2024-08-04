import { MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Seance {
    readonly dayId: number;
    readonly day: string;
    readonly time: string;
    readonly seanceOfDay: number;

}

class Groupe {
    readonly name: number;
    readonly color: number;
    readonly capitain: string;
    readonly list: string[];
}

class Student {
    readonly name: string;
    readonly naissance: string;
    readonly classe: string;
    readonly num: number;
    readonly naissanceYear: number;
    readonly responsable: boolean;
    readonly groupeName?: number;
    readonly groupeColor?: string;
    readonly maladie?: string;
    readonly genre?: string;
    readonly apsPref?: string;
    readonly fc?: number;
    readonly taille?: number;
    readonly poids?: number;
    readonly vma?: number;
    readonly vitesse?: number;
    readonly detV?: number;
    readonly detH?: number;
    readonly toResults?: any[];
}

class Classe {
    readonly name: string;
    readonly nvId: number;
    readonly nvName: string;
    @Type(() => Seance)
    readonly seance1: Seance;
    @Type(() => Seance)
    readonly seance2: Seance;
    readonly cycles: any[];
    readonly students: Student[];
    @Type(() => Seance)
    readonly groupes: Groupe[];
}


class Cycle {
    readonly ordre: number;
    readonly apsId: number;
    readonly apsName: string;
    readonly apsShortName: string;
    readonly apsFamille: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly weeks: any[];

}

export class CreateUserDto {
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly uid: string;
    readonly phone: string;
    readonly email: string;
    readonly status: number;
    readonly activationDate: Date;
    readonly role: 'standard' | 'admin' | 'owner';
    readonly academieId: number;
    readonly directionId: number;
    readonly academie: string;
    readonly direction: string;
    readonly etablissement: string;
    readonly prof: string;
    readonly mission: string;
    readonly niveaux: string[];
    // @ValidateNested({ each: true })
    @Type(() => Classe)
    // @MaxLength(12; {
    //     each: true;
    //   })
    readonly classes: Classe[];
    @ValidateNested({ each: true })
    @Type(() => Cycle)
    @MaxLength(6, {
        each: true,
    })
    readonly cycles: Cycle[];
    readonly cycleTexteTotal: any[]
    // readonly place: Place;
}

export class UpdateRoleUserDto {
    readonly role: string;
}

export class UpdateStatusUserDto {
    readonly status: number;
}
