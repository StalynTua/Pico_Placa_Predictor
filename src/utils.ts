
export const getTime = (date: string) => {
    const currentDate = new Date(date);
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formatHour: string = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`;
    return formatHour
}