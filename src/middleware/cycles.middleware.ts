import { Request, Response, NextFunction } from 'express';
import * as moment from "moment";

export function cycleHandler(req: Request, res: Response, next: NextFunction) {
    const days: string[] = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    let cycles: any[] = req.body.cycles

    let weekDaysNum: number[] = []
    for (const day of req.body.tableauDeService) {
        weekDaysNum.push(day.dayNum)
    }

    for (const cycle of req.body.cycles) {
        let weekDays: any[] = []
        // var startDate = moment(cycle.startDate).weekday(8)

        var startDate = moment(cycle.startDate)
        while (startDate.isBefore(new Date(cycle.endDate))) {
            let dayData: any
            if (startDate.format('ddd') !== 'Sun' && weekDaysNum.includes(startDate.day())) {
                dayData = {
                    dayNum: startDate.day(),
                    name: days[startDate.day()],
                    date: startDate.format('DD-MM-YYYY')
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