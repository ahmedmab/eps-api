import { MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Seance {
    readonly dayId: number;
    readonly day: string;
    readonly time: string;
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

}

class Place {
    readonly name: string;
    readonly city: string;
    readonly province: string;
    readonly region: string;
    readonly country: string;

}

// class TableauDays {
//     readonly name: string;
//     readonly dayId: number;
//     @Type(() => Classe)
//     readonly classes: Classe[];
// }

class Cycle {
    readonly ordre: number;
    readonly apsName: string;
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
    readonly status: number;
    readonly etablissement: string;
    readonly prof: string;
    readonly mission: string;
    readonly niveaux: string[];
    // @ValidateNested({ each: true })
    @Type(() => Classe)
    // @MaxLength(12, {
    //     each: true,
    //   })
    readonly classes: Classe[];
    @ValidateNested({ each: true })
    @Type(() => Cycle)
    @MaxLength(6, {
        each: true,
    })
    readonly cycles: Cycle[];
    readonly cycleTexteTotal: any[]
    readonly place: Place;
}