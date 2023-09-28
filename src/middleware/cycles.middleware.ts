import { Request, Response, NextFunction } from 'express';
import * as moment from "moment";

export function cycleHandler(req: Request, res: Response, next: NextFunction) {
    const days: string[] = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    let cycles: any[] = req.body.cycles
    let weekDaysNum: number[] = []
    for (const classe of req.body.classes) {
        weekDaysNum.push(classe.seance1.dayId)
        weekDaysNum.push(classe.seance2.dayId)
    }
    // sort les jour de la semaine
    weekDaysNum = weekDaysNum.sort((a, b) => a - b);

    for (const cycle of req.body.cycles) {
        let weekDays: any[] = []
        // var startDate = moment(cycle.startDate).weekday(8)
        var startDate = moment(cycle.startDate)
        while (startDate.isBefore(new Date(cycle.endDate))) {
            let dayData: any
            if (startDate.format('ddd') !== 'Sun' && weekDaysNum.includes(startDate.day())) {
                dayData = {
                    dayId: startDate.day(),
                    dayName: days[startDate.day()],
                    date: startDate.format('DD/MM/YYYY'),
                    freeDay: false
                }

                weekDays.push(dayData)

            }
            startDate = startDate.add(1, 'days');
            
        }

        cycle.weekDays = weekDays

    }
    req.body.cycles = cycles
    next();
};