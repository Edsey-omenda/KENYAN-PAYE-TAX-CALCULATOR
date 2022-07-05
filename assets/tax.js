

function taxCalculator() {
    let amount = document.getElementById("basic-salary").value = 200000;
    let bonus = document.getElementById('bonus-benefits').value = 80000;
    // console.log(x);
    if(amount > 85650){
        tax = (amount - 85650) * .28 + 870.0+(35350-8700)*.15+(89350-36900)*.25;
    }
    else if( amount > 35350){
    tax = (amount - 35350) * .25 + 870.0+(35350-8700)*.15;    
    }
    else if(amount > 8700){
    tax = (amount - 8700) * .15 + 870.0;
    }
    else{
       tax = amount * .10;
        }
    tax += amount * .153;
    return tax;

}

taxCalculator();




