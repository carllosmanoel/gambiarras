function formatMilliseconds(miliseconds) {
    seconds_two = Number(miliseconds) / 1000; // estava sem criatividade e não encontrei nome melhor kkkk
    let hours = Math.floor(seconds_two / 3600);
    let minutes = Math.floor(seconds_two % 3600 / 60);
    let seconds = Math.floor(seconds_two % 3600 % 60);

    let displayHours = hours > 0 ? hours + (hours == 1 ? minutes > 0 ? seconds > 0 ? " hora, " : " hora, " : seconds > 0 ? " hora e " : " hora " : minutes > 0 ? " horas, " : " horas ") : "";
    let displayMinutes = minutes > 0 ? minutes + (minutes == 1 ? seconds > 0 ? " minuto e " : " minuto " : seconds > 0 ? " minutos e " : " minutos ") : "";
    let displaySeconds = seconds > 0 ? seconds + (seconds == 1 ? " segundo" : " segundos") : "";
    return displayHours + displayMinutes + displaySeconds;
}

/*Exemplos:

formatMilliseconds(2000) / 2 segundos
formatMilliseconds(9434000) / 2 horas, 37 minutos e 14 segundos
formatMilliseconds(334324234) / 92 horas, 52 minutos e 4 segundos
*/
