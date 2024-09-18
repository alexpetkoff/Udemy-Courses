export function getFormattedDate(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

// export function getDateMinusDays(date, days) {
//     return new Date(date.getDate() - days, date.getMonth() + 1, date.getFullYear());
// }

export function getDateMinusDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
}
