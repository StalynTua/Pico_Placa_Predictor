import PicoPlacaPredictorParams, {Holidays, PicoPlacaDays, PicoPlacaHours} from "../entity/picoPlaca.entity";
import {getTime} from "../utils";

export const picoPlacaPrediction = (params: PicoPlacaPredictorParams): boolean => {
    const {plate, date} = params
    const weekdayNumber = new Date(date).getDay();

    const lastDigit = parseInt(plate.charAt(plate.length - 1));

    if (validateHoliday(date)) return true
    if (PicoPlacaDays[weekdayNumber]
        && PicoPlacaDays[weekdayNumber]!.find((day) => day === lastDigit)) {
        return validateHour(date, PicoPlacaHours[0]) && validateHour(date, PicoPlacaHours[1]);
    }

    return true;
}

const validateHoliday = (date: string): boolean => {
    const currentDate = new Date(date)
    for (const holiday of Holidays) {
        const dateHoliday = new Date(holiday);
        if (dateHoliday.getDay() === currentDate.getDay() && dateHoliday.getMonth() === currentDate.getMonth()) {
            return true
        }
    }
    return false
}

const validateHour = (date: string, hour: string[] = []): boolean => {
    const time: string = getTime(date);
    const [startTime, endTime] = hour
    if (startTime && endTime) {
        const [startHour, startMin] = startTime.split(':').map(Number);
        const [endHour, endMin] = endTime.split(':').map(Number);
        const [hour, min] = time.split(':').map(Number);
        const currentTime = new Date();
        currentTime.setHours(hour || 0, min, 0);
        const picoPlacaStart = new Date();
        picoPlacaStart.setHours(startHour || 0, startMin, 0);
        const picoPlacaEnd = new Date();
        picoPlacaEnd.setHours(endHour || 0, endMin, 0);
        return !(
            currentTime >= picoPlacaStart &&
            currentTime <= picoPlacaEnd
        );
    }
    return false
}