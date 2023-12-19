import { Request, Response, NextFunction } from 'express';

export function cycleTexte(req: Request, res: Response, next: NextFunction) {
    // const days: string[] = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    // let weekDaysNum: number[] = []
    let cycleTexteSeance: any[] = []
    const cycleTexteTotal: any[] = []
    // sort les jour de la semaine
    // weekDaysNum = weekDaysNum.sort((a, b) => a - b);
    for (let index = 0; index < req.body.cycles.length; index++) {
        // for (const cycle of req.body.cycles) {
        for (let i = 0; i < 12; i++) { //12 est le nombre des seance standard de cycle
            for (const classe of req.body.classes) {
                const seance = classe.cycles[index].seances[i]
                let time: string = ''
                let seanceOfWeek: number = 0
                if (classe.seance1?.dayId === seance?.dayId) {
                    time = classe.seance1.time
                    seanceOfWeek = 1
                }
                else if (classe.seance2?.dayId === seance?.dayId) {
                    time = classe.seance2.time
                    seanceOfWeek = 2
                }
                if (seance) {
                    cycleTexteSeance.push({
                        niveauId: classe.nvId,
                        niveau: classe.nvName,
                        classe: classe.name,
                        aps: classe.cycles[index].apsName,
                        date: seance?.date,
                        time: time,
                        seanceOfWeek: seanceOfWeek,
                        cycleOrdre: i + 1
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
        const cycleTexteFiltred = cycleTexteTotal.map(arr => arr.filter(s => s.niveauId == nvId))

        const cycleTexteObj = {
            nvId: nvId,
            classeNumber: req.body.classes.filter(cl => cl.nvId == nvId).length,
            seances: cycleTexteFiltred
        }
        result.push(cycleTexteObj)
    }

    req.body.cycleTexteTotal = result
    next();
};