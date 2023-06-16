import {picoPlacaPrediction} from '../src/service/picoPlaca.service';

describe('picoPlacaPrediction', () => {
    it('The function should return true if all of the following conditions are met:\n' +
        '- The last digit of the license plate is not 1 or 2.\n' +
        '- The date is a Monday.', () => {
        const params = {
            plate: 'ABC123',
            date: '2023-06-12 17:00'
        };

        const result = picoPlacaPrediction(params);

        expect(result).toBe(true);
    });

    it('The function should return false if all of the following conditions are met:\n' +
        '- The last digit of the license plate is 1 or 2.\n' +
        '- The date is a Monday.\n' +
        '- the time is between 6:00 and 9:30 in the morning, or between 16:00 and 21:00 in the evening', () => {
        const params = {
            plate: 'XYZ781',
            date: '2023-06-12 16:00'
        };

        const result = picoPlacaPrediction(params);

        expect(result).toBe(false);
    });

    it('The function should return true if all of the following conditions are met:\n' +
        '- The date is a weekend', () => {
        const params = {
            plate: 'XYZ781',
            date: '2023-06-17 16:00'
        };

        const result = picoPlacaPrediction(params);

        expect(result).toBe(true);
    });

    it('The function should return true if all of the following conditions are met:\n' +
        '- The last digit of the license plate is 1 or 2.\n' +
        '- The date is a Holiday.\n' +
        '- the time is between 6:00 and 9:30 in the morning, or between 16:00 and 21:00 in the evening', () => {
        const params = {
            plate: 'XYZ781',
            date: '2023-05-01 16:00'
        };

        const result = picoPlacaPrediction(params);

        expect(result).toBe(true);
    });

    it('The function should return true if all of the following conditions are met:\n' +
        '- The date is a weekend', () => {
        const params = {
            plate: 'XYZ781',
            date: '2023-06-17 16:00'
        };

        const result = picoPlacaPrediction(params);

        expect(result).toBe(true);
    });

});