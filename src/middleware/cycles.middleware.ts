import { Request, Response, NextFunction } from 'express';
import * as moment from "moment";

export function cycleHandler(req: Request, res: Response, next: NextFunction) {
    for (const cycle of req.body.cycles) {
        let weeks: any[] = []
        // let weekNumber = Math.round(((new Date(cycle.endDate).getTime())- new Date(cycle.startDate).getTime()) / (7 * 24 * 60 * 60 * 1000))
        var startDate = moment(new Date(cycle.startDate))
        // .isoWeekday(8);
        // if (startDate.date() == 8) {
        //     startDate = startDate.isoWeekday(-6)
        // }

        // var today = moment().isoWeekday('Sunday');
        while (startDate.isBefore(new Date(cycle.endDate))) {            
            let startDateWeek = startDate.isoWeekday('Monday').format('DD-MM-YYYY');
            let endDateWeek = startDate.isoWeekday('Sunday').format('DD-MM-YYYY');
            var week = [startDateWeek, endDateWeek]
            startDate.add(7, 'days');
            weeks.push(week);
        }
        // cycle.weeks.push(week);
        cycle.weeks = weeks
        console.log(cycle);

    }
    // cycles = cycles.map(({ name, nvId, nvName }) => ({ name, nvId, nvName }))
    // req.body.cycles = cycles
    // console.log(`Cycle Request...`, req.body.cycles);
    next();
};