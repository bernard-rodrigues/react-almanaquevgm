export function convertGMT(date: string){
    let weekDay, month, hour
    switch(date.slice(0, 3)){
        case 'Sun': weekDay = 'Dom'; break;
        case 'Mon': weekDay = 'Seg'; break;
        case 'Tue': weekDay = 'Ter'; break;
        case 'Wed': weekDay = 'Qua'; break;
        case 'Thu': weekDay = 'Qui'; break;
        case 'Fri': weekDay = 'Sex'; break;
    }
    switch(date.slice(8,11)){
        case 'Jan': month = 'Jan'; break;
        case 'Feb': month = 'Fev'; break;
        case 'Mar': month = 'Mar'; break;
        case 'Apr': month = 'Abr'; break;
        case 'Jun': month = 'Jun'; break;
        case 'Jul': month = 'Jul'; break;
        case 'Aug': month = 'Ago'; break;
        case 'Sep': month = 'Set'; break;
        case 'Oct': month = 'Out'; break;
        case 'Nov': month = 'Nov'; break;
        case 'Dec': month = 'Dez'; break;
    }
    hour = Number(date.slice(17,19)) - 3

    return `${weekDay}, ${date.slice(4,7)} de ${month} de ${date.slice(11,16)} às ${hour}:${date.slice(20,25)}`
}