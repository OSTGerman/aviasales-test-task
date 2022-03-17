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
    if (hour) result += `${hour}ч `;
    if (minutes || !hour) result += `${minutes}м`;
    return result;
};

export const declOfNum = (number: number, titles: string[]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    if (number % 1 != 0) return titles[1];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

export const priceConverter = (amount: number): string => {
    const currency = 'Р';
    const [int, dec] = amount.toString().split('.');
    const dis = int.length > 3 ? int.length % 3 : 0;
    return (dis ? int.substring(0, dis) + ' ' : '') + int.substring(dis) + (dec ? '.' + dec : '') + ' ' + currency;
};
