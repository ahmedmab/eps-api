import { Request, Response, NextFunction } from 'express';

export function cycleTexte(req: Request, res: Response, next: NextFunction) {
    const days: string[] = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    let cycles: any[] = req.body.cycles
    let weekDaysNum: number[] = []
    let cycleTexteSeance: any[] = []
    let cycleTexteTotal: any[] = []
    // sort les jour de la semaine
    weekDaysNum = weekDaysNum.sort((a, b) => a - b);
    for (let index = 0; index < req.body.cycles.length; index++) {
        // for (const cycle of req.body.cycles) {
        for (let i = 0; i < 10; i++) {
            for (const classe of req.body.classes) {
                let seance = classe.cycles[index].seances[i]
                let time: string = ''
                if (classe.seance1?.dayId === seance?.dayId) {
                    time = classe.seance1.time

                }
                else if (classe.seance2?.dayId === seance?.dayId) {
                    time = classe.seance2.time

                }
                if (seance) {
                    cycleTexteSeance.push({
                        niveauId: classe.nvId,
                        niveau: classe.nvName,
                        classe: classe.name,
                        aps: classe.cycles[index].apsName,
                        date: seance?.date,
                        time: time
                    })
                } else {
                    continue
                }

            }
        }
        cycleTexteTotal.push(cycleTexteSeance)
        cycleTexteSeance = []
        // let weekDays: any[] = cycle.weekDays
        // for (const day of weekDays) {
        //     day.classes = []
        //     for (const classe of req.body.classes) {
        //         if (classe.seance1.dayId === day.dayId) {
        //             day.classes.push({
        //                 name: classe.name,
        //                 time: classe.seance1.time
        //             })
        //         }
        //         else if (classe.seance2.dayId === day.dayId) {
        //             day.classes.push({
        //                 name: classe.name,
        //                 time: classe.seance2.time
        //             })
        //         }
        //     }

        // }
        // cycle.weekDays = weekDays

    }
    const result: any[] = []
    for (const nvId of req.body.niveaux) {
        let cycleTexteFiltred = cycleTexteTotal.map(arr => arr.filter(s => s.niveauId == nvId))
        let cycleTexteObj = {
            nvId: nvId,
            classeNumber: req.body.classes.filter(cl => cl.nvId == nvId).length,
            seances: cycleTexteFiltred
        }
        result.push(cycleTexteObj)
    }

    req.body.cycleTexteTotal = result
    next();
};