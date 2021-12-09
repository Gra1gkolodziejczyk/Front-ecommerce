import numeral from 'numeral';
import moment from 'moment';

// let currencyIso = [
//     {'fr': 'fr-FR'},
//     {'en': 'en-GB'},
// ];

export function formatPriceToDisplay(price) {
    let number = price / 100;
    let priceuh = numeral(number).value();

    return (priceuh);
}

export function formatPriceToSave(price) {
    let number = Math.round(price*100);
    
    return number;
}

export const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

export const getTimeFromMins = (durationInMinuts) => {
    if (durationInMinuts < 0) {
        throw new RangeError("Valid input should be greater than or equal to 0.");
    }
    var hours = durationInMinuts / 60 | 0,
        minuts = durationInMinuts % 60 | 0;

    if (!minuts) {
        return `${hours}H`;
    } else if (!hours) {
        return `${minuts} min`
    } else {
        return `${hours} H ${minuts}`;
    }
}