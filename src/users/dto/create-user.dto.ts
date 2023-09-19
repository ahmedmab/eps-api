
class Place {
    readonly name: string;
    readonly city: string;
    readonly province: string;
    readonly region: string;
    readonly country: string;

}

export class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly etablissement: string;
    readonly prof: string;
    readonly mission: string;
    readonly classes: any[];
    readonly tableauDeService: any[];
    readonly cycles: any[];
    readonly place: Place
}