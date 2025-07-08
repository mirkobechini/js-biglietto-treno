const PRICE_KM = 0.21;
const YOUNG_DISCOUNT = 0.20;
const OLDER_DISCOUNT = 0.40;

const km = Number(prompt('Quanti chilometri vuoi percorrere ?'));
const age = Number(prompt('Quanti anni hai ?'));


let ticketPrice = km * PRICE_KM;

if (age > 65) {
    ticketPrice -= ticketPrice * OLDER_DISCOUNT;

} else if (age < 18) {
    ticketPrice -= ticketPrice * YOUNG_DISCOUNT;
}

ticketPrice = ticketPrice.toFixed(2);

console.log(`Il prezzo è € ${ticketPrice}`);
