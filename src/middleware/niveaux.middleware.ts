import { Request, Response, NextFunction } from 'express';

export function niveauHandler(req: Request, res: Response, next: NextFunction) {
    let niveaux: any[] = []
    let classes: any[] = req.body.classes    
    classes.sort((a, b) => a.nvId - b.nvId);
    for (const classe of classes) {
        niveaux.push(classe.nvId)        
    }
    req.body.classes = classes
    req.body.niveaux = Array.from(new Set(niveaux))
    next();
};