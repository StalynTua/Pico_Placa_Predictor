export default interface PicoPlacaPredictorParams {
    plate: string,
    date: string
}

export const PicoPlacaDays: { [key: number]: number[] } = {
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8],
    5: [9, 0]
};

export const Holidays: string[] = [
    '2023-01-01 00:00',
    '2023-05-01 00:00',
    '2023-05-24 00:00',
    '2023-08-10 00:00',
    '2023-10-09 00:00',
    '2023-11-02 00:00',
    '2023-12-25 00:00',
    '2023-12-31 00:00'
]

export const PicoPlacaHours: string[][] = [
    ['6:00', '9:30'],
    ['16:00', '21:00']
]