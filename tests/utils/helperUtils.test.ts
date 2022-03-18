import { timeToString, calcDuration, declOfNum, priceConverter } from '@utils/helperUtils';

const timeToStringTestData: [number | undefined, string | null][] = [
    [1647637576090, '02:06'],
    [undefined, null],
    [0, null],
];

describe('test timeToString function', () => {
    for (let i = 0; i < timeToStringTestData.length; i++) {
        const value = timeToStringTestData[i][0];
        const expectedValue = timeToStringTestData[i][1];
        it(`should return ${expectedValue} for timeToString(${value})`, () => {
            expect(timeToString(value)).toBe(expectedValue);
        });
    }
});

const calcDurationTestData: [number, string][] = [[7200000, '2ч']];

describe('test calcDuration function', () => {
    for (let i = 0; i < calcDurationTestData.length; i++) {
        const value = calcDurationTestData[i][0];
        const expectedValue = calcDurationTestData[i][1];
        it(`should return ${expectedValue} for calcDuration(${value})`, () => {
            expect(calcDuration(value)).toBe(expectedValue);
        });
    }
});

const titles: string[] = ['билет', 'билета', 'билетов'];
const declOfNumTestData: [number, string[], string][] = [
    [1, titles, 'билет'],
    [22, titles, 'билета'],
    [1356, titles, 'билетов'],
    [10239901, titles, 'билет'],
    [0, titles, 'билетов'],
    [0.0000000001, titles, 'билета'],
];

describe('test declOfNum function', () => {
    for (let i = 0; i < declOfNumTestData.length; i++) {
        const value = declOfNumTestData[i][0];
        const array = declOfNumTestData[i][1];
        const expectedValue = declOfNumTestData[i][2];
        it(`should return ${expectedValue} for declOfNum(${value}, ${array})`, () => {
            expect(declOfNum(value, array)).toBe(expectedValue);
        });
    }
});

const priceConverterTestData: [number, string][] = [
    [1.00000000000001, '1 Р'],
    [0.001, '0 Р'],
    [0.01, '0.01 Р'],
    [2000.0, '2 000 Р'],
    [23000.22, '23 000.22 Р'],
    [1000000, '1 000 000 Р'],
    [11000000000, '11 000 000 000 Р'],
];

describe('test priceConverter function', () => {
    for (let i = 0; i < priceConverterTestData.length; i++) {
        const value = priceConverterTestData[i][0];
        const expectedValue = priceConverterTestData[i][1];
        it(`should return ${expectedValue} for priceConverter(${value})`, () => {
            expect(priceConverter(value)).toBe(expectedValue);
        });
    }
});
