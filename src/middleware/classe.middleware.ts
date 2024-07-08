import { Request, Response, NextFunction } from 'express';

export function classeHandler(req: Request, res: Response, next: NextFunction) {
    const classes: any[] = req.body.user.classes
    const classe: any = classes.find((cl: { name: any; }) => cl.name == req.body.classe)
    const classeIndex: number = classes.findIndex((element) => element == classe)

    // const groupes: any[] = classe.groupes
    // for (const student of classe.students) {
    //     student.groupeName = null
    //     student.groupeColor = null

    //     for (const groupe of groupes) {
    //         const checkGroupe = groupe.list.find((st: { name: any; }) => st.name == student.name)
    //         if (checkGroupe) {
    //             student.groupeName = groupe.name,
    //                 student.groupeColor = groupe.color
    //         }
    //     }

    // }
    req.body.user.classes[classeIndex] = classes[classeIndex]
    next();
};