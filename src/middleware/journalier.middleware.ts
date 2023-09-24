import { Request, Response, NextFunction } from 'express';

export function journalier(req: Request, res: Response, next: NextFunction) {
    let classes: any[] = []

    for (let i = 0; i < req.body.classes.length - 1; i += 2) {
        const classeS1 = req.body.classes[i]
        const classeS2 = req.body.classes[i + 1]
        let classe = classeS1
        let cycles: any[] = []

        for (let index = 0; index < 6; index++) {
            const cycle = mix(classeS1.cycles[index], classeS2.cycles[index])
            cycles.push(cycle)
        }
        classe.cycles = cycles
        classes.push(classe)        
    }

    // classes = classes.map(({ name, nvId, nvName, time }) => ({ name, nvId, nvName, time }))
    // classes.sort((a, b) => a.nvId - b.nvId);
    req.body.classes = classes
    // console.log(mix(['a', 'b', 'c'], [10, 9]));

    next();
};

//function
function mix(array1, array2) {
    let newList = [];
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        if (i < array1.length) {
            newList.push(array1[i]);
        }
        if (i < array2.length) {
            newList.push(array2[i]);
        }
    }
    return newList;
}