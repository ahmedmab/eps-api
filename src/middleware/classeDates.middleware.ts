import { Request, Response, NextFunction } from 'express';

export async function classeDates(req: Request, res: Response, next: NextFunction) {
    // const days: string[] = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    const classes: any[] = req.body.classes
    const cycles: any[] = req.body.cycles

    for (const classe of classes) {
        let cycleData: any
        for await (const cycle of cycles) {

            const seances: any[] = await cycle.weekDays?.filter((s: { dayId: any; }) => s.dayId == classe.seance1.dayId || s.dayId == classe.seance2.dayId)
            cycleData = {
                classe: classe.name,
                nvId: classe.nvId,
                nvName: classe.nvName,
                apsName: cycle.apsName,
                apsFamille: cycle.apsFamille,
                ordre: cycle.ordre,
                startDate: cycle.startDate,
                endDate: cycle.endDate,
                seances: seances
            }
            await classe.cycles.push(cycleData)

        }
    }
    
    req.body.classes = classes
    next();
};

