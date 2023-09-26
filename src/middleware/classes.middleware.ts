import { Request, Response, NextFunction } from 'express';

export function classeHandler(req: Request, res: Response, next: NextFunction) {
    if (Array.isArray(req.body.classes[0])) {
        let classes: any[] = []
        let niveaux: any[] = []

        for (const nvAr of req.body.classes) {
            for (const classe of nvAr) {
                classes.push(classe)
                niveaux.push(classe.nvId)
            }

        }
        classes = classes.map(({ name, nvId, nvName, time }) => ({ name, nvId, nvName, time }))
        classes.sort((a, b) => a.nvId - b.nvId);
        req.body.classes = classes
        req.body.niveaux = Array.from(new Set(niveaux))

    }

    next();
};