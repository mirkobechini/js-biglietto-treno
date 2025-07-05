const priceKm = 0.21;
const youngDiscount = 0.20;
const olderDiscount = 0.40;

const km = Number(prompt('Quanti chilometri vuoi percorrere ?'));
const age = Number(prompt('Quanti anni hai ?'));


let finalPrice = km * priceKm;

if (age > 65) {
    finalPrice -= finalPrice * olderDiscount;

} else if (age < 18) {
    finalPrice -= finalPrice * youngDiscount;
}

finalPrice = finalPrice.toFixed(2);

console.log(`Il prezzo è € ${finalPrice}`);
