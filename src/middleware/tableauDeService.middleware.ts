import { Request, Response, NextFunction } from 'express';

export function tableauDeServiceHandler(req: Request, res: Response, next: NextFunction) {
    const days: string[] = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    let tableauDeService: any[] = []
    let double

    //Remove Function
    const restOfArray = (arr, value) =>
        arr.filter(item => item.name !== value);

    for (const dayArr of req.body.tableauDeService) {
        let day = {
            name: dayArr[0].time.day,
            dayNum: days.indexOf(dayArr[0].time.day),
            classes: []
        }
        for (const classe of dayArr) {
            day.classes.push(classe) 
        }
        tableauDeService.push(day)
    }

    for (let dayNum = 1; dayNum < 7; dayNum++) {
        const duplicateCheck = tableauDeService.filter(day => day?.dayNum === dayNum);
        if (duplicateCheck.length > 1) {

            double = duplicateCheck[0]
            let classes = []
            for (let i = 0; i < duplicateCheck.length - 1; i++) {
                if (i + 1 <= duplicateCheck.length + 1) {
                    classes = duplicateCheck[i]?.classes.concat(duplicateCheck[i + 1]?.classes)
                }


            }
            double.classes = classes

        }
    }
    const tableauFiltred = restOfArray(tableauDeService, double.name)
    tableauFiltred.push(double)
    tableauFiltred.sort((a, b) => a.dayNum - b.dayNum);
    req.body.tableauDeService = tableauFiltred

    next();
};
