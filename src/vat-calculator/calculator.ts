console.log("hello");


const netto2brutto = document.querySelector('#netto2brutto') as HTMLInputElement;
const brutto2netto = document.querySelector('#brutto2netto') as HTMLInputElement;
const percent19 = document.querySelector('#percent19') as HTMLInputElement;
const percent7 = document.querySelector('#percent7') as  HTMLInputElement;
const insertAmount = document.querySelector('#insertAmount') as HTMLInputElement
const amountTextChange = document.querySelector('#amountTextChange') as HTMLElement;
const calculateBtn = document.querySelector('#calculateBtn') as HTMLInputElement;
const taxAmount = document.querySelector('#taxAmount') as HTMLElement;
const totalTextChange = document.querySelector('#totalTextChange') as HTMLElement;
const totalAmount = document.querySelector('#totalAmount') as HTMLElement;


console.log(netto2brutto);
console.log(brutto2netto);
console.log(percent19);
console.log(percent7);
console.log(insertAmount);
console.log(amountTextChange);
console.log(totalTextChange);

console.log(calculateBtn);
console.log(taxAmount);
console.log(totalAmount);


/* Brutto divided 1.19 = netto amount */
/*Brutto / 1.19 * 0,19 =difference amount */
/* netto * 1.19 = brutto amount */
/* netto * 1.19 = difference amount */

/* brutto divided 1,07 * 0,07= difference amount */


if(calculateBtn){
    calculateBtn.addEventListener('click', () => {
        console.log("test");
        console.log(insertAmount.value);
        
    })
};

/* changing texts over input and output field, depending on chosen radio button */
netto2brutto.addEventListener('click', () => {
    console.log("adding tax");
    if(amountTextChange){
        amountTextChange.textContent = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro "
    }if(totalTextChange){
        totalTextChange.textContent = "Bruttobetrag (Endpreis)"
    }
    
});

  /* changing texts over input and output field, depending on chosen radio button */
 brutto2netto.addEventListener('click', () =>{
    console.log("reducing tax");
    if(amountTextChange){
        amountTextChange.textContent = "Bruttobetrag (Preis mit Mehrwerststeuer) in Euro";
    } if (totalTextChange){
        totalTextChange.textContent = "Nettobetrag"
    }
    
 })       




/* function calculation(){
    if(netto2brutto && )
} */