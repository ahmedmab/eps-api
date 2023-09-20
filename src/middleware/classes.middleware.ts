import { Request, Response, NextFunction } from 'express';

export function classeHandler(req: Request, res: Response, next: NextFunction) {
    let classes: any[] = []
    for (const nvAr of req.body.classes) {
        for (const classe of nvAr) {
            classes.push(classe)
        }

    }
    classes = classes.map(({ name, nvId, nvName }) => ({ name, nvId, nvName }))
    classes.sort((a, b) => a.nvId - b.nvId);
    req.body.classes = classes
    console.log(`Request...`, req.body.classes);
    next();
};