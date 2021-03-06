export const API = 'http://localhost:3000/api';
export const timeToString = (time: number | undefined): string | null => {
    return time
        ? new Date(time).toLocaleString('ru', {
              hour: 'numeric',
              minute: 'numeric',
          })
        : null;
};
export const calcDuration = (timestamp: number): string => {
    let result = '';
    const hour = ~~(timestamp / 3600000);
    const minutes = ~~((timestamp - hour * 3600000) / 60000);
    if (hour) result += `${hour}ч`;
    if (minutes || !hour) result += (hour ? ' ' : '') + `${minutes}м`;
    return result;
};

export const declOfNum = (number: number, titles: string[]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    if (number % 1 != 0) return titles[1];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

export const priceConverter = (amount: number): string => {
    const currency = 'Р';
    const [int, dec] = amount.toFixed(2).split('.');
    function getSubstring(str: string): string {
        if (!str.length) return '';
        const dis = str.length > 3 ? (str.length % 3 ? str.length % 3 : 3) : 0;
        return dis ? str.substring(0, dis) + ' ' + getSubstring(str.substring(dis)) : str.substring(dis);
    }
    return getSubstring(int) + (Number(dec) ? '.' + dec : '') + ' ' + currency;
};
