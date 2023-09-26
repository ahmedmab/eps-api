import { Request, Response, NextFunction } from 'express';
import * as moment from "moment";

export function classeDates(req: Request, res: Response, next: NextFunction) {
    const days: string[] = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    let classes: any[] = []
    let cycles: any[] = req.body.cycles
    let tableau: any[] = req.body.tableauDeService
    for (const classe of req.body.classes) {
        for (const day of tableau) {
            let classeData:any = {}
            for (const classeDay of day.classes) {
                if (classe.name === classeDay.name) {
                    classeData = {
                        name: classe.name,
                        nvId: classe.nvId,
                        nvName: classe.nvName,
                        seance: classeDay.seance,
                        dayNum: classeDay.time.id,
                        day: classeDay.time.day,
                        time: classeDay.time.hour,
                        seanceOfDay: +(classeDay.time.elem[classeDay.time.elem.length-1]),
                        cycles: []
                    }
                    // Tout les seances de cycle:
                    for (const cycle of cycles) {
                        let cycleDates = cycle.weekDays.filter(day=> day.dayNum == classeData.dayNum)
                        classeData.cycles.push(cycleDates)
                        
                    }                    
                    classes.push(classeData)
                }
            }
        }
    }
  
    // classes = classes.map(({ name, nvId, nvName, time }) => ({ name, nvId, nvName, time }))
    // classes.sort((a, b) => a.nvId - b.nvId);
    req.body.classes = classes
    // console.log(req.body);
        
    next();
};

