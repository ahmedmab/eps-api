import { MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Time {
    readonly day: string;
    readonly hour: string;
    readonly elem: string;
}

class Classe {
    readonly name: string;
    readonly nvId: number;
    readonly nvName: string;
    readonly seance: number;
    @Type(() => Time)
    readonly time: Time;
}

class Place {
    readonly name: string;
    readonly city: string;
    readonly province: string;
    readonly region: string;
    readonly country: string;

}

class TableauDays {
    readonly name: string;
    readonly dayNum: number;
    // @ValidateNested({ each: true })
    @Type(() => Classe)
    readonly classes: Classe[];
}

class Cycle {
    readonly ordre: number;
    readonly apsName: string;
    readonly apsFamille: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly weeks: any[];

}

export class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly status: number;
    readonly etablissement: string;
    readonly prof: string;
    readonly mission: string;
    // @ValidateNested({ each: true })
    @Type(() => Classe)
    // @MaxLength(12, {
    //     each: true,
    //   })
    readonly classes: Classe[];
    // @ValidateNested({ each: true })
    @Type(() => TableauDays)
    // @MaxLength(6, {
    //     each: true,
    //   })
    readonly tableauDeService: TableauDays[];
    @ValidateNested({ each: true })
    @Type(() => Cycle)
    @MaxLength(6, {
        each: true,
      })
    readonly cycles: Cycle[];
    readonly place: Place;
}