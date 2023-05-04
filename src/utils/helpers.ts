import moment from 'moment';

export const NAME_REGREX = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/;
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/;


export const getDaysDifference = (days: number) => {
    return new Date().setDate(new Date().getDate() - days);
}

export function getCurrentWeek() {
    var days: any[] = [];
    for (var i = 6; i >= 0; i--) {
        days.push(moment().subtract(i, 'days').format("MM/DD"));
    }
    return days;
}