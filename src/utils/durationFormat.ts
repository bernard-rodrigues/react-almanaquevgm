export function durationFormat(duration: string){
    let dur: string[] = duration.split(':')
    if(dur[0] != '00'){
        duration = dur[0] + 'h' + dur[1] + 'min'
    }else{
        duration = dur[1] + 'min'
    }
    return duration
}