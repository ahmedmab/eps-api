import { Request, Response, NextFunction } from 'express';
import * as moment from "moment";

export function cycleHandler(req: Request, res: Response, next: NextFunction) {

    for (const cycle of req.body.cycles) {
        let weeks: any[] = []
        var startDate = moment(cycle.startDate).weekday(8)

        while (startDate.isBefore(new Date(cycle.endDate))) {
            let startDateWeek = startDate.format('DD-MM-YYYY');
            let endDateWeek = startDate.clone().add(6, 'days');
            var week = [startDateWeek, endDateWeek.format('DD-MM-YYYY')]
            if (endDateWeek.isSameOrBefore(new Date(cycle.endDate))) {
                weeks.push(week);
            }
            startDate.add(7, 'days');

        }
        if (true) {
            let firstMonday = moment(cycle.startDate).weekday(7).format('DD-MM-YYYY')
            week = [moment(cycle.startDate).format('DD-MM-YYYY'), firstMonday]
            weeks.unshift(week);
        }
        if (true) {
            let lastMonday = moment(cycle.endDate).weekday(1).format('DD-MM-YYYY')
            week = [lastMonday, moment(new Date(cycle.endDate)).format('DD-MM-YYYY')]
            weeks.push(week);
        }
        // cycle.weeks.push(week); 
        cycle.weeks = weeks

    }
    // cycles = cycles.map(({ name, nvId, nvName }) => ({ name, nvId, nvName }))
    // req.body.cycles = cycles
    next();
};