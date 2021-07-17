function buttonHandler(buttonID, valueID, elementPrice, price) {
    var plusClicked = document.getElementById(buttonID);
    plusClicked.addEventListener('click', () => {
        const valueAdded = document.getElementById(valueID).value;
        const valueAddedNumber = parseInt(valueAdded);

        const mobilePrice = document.getElementById(elementPrice).innerText;
        const mobilePriceNumber = parseInt(mobilePrice);

        const sub = document.getElementById('subTotal').innerText;
        const subNumber = parseInt(sub);
        
        const tax = document.getElementById('tax').innerText;
        const taxNumber = parseInt(tax);
        
        const total = document.getElementById('total').innerText;
        const totalNumber = parseInt(total);
        


        if (buttonID === "plusButton" || buttonID === "plusButton2") {
            
            
            var sum = valueAddedNumber + 1;
            document.getElementById(valueID).value = sum;
            mobilePriceTotal = mobilePriceNumber + price;
            document.getElementById(elementPrice).innerText = mobilePriceTotal;

            const subTotal = subNumber + price;
            document.getElementById('subTotal').innerText = subTotal;
            
            const totalFinal = taxNumber + subTotal;
            document.getElementById('total').innerText = totalFinal;


        }
        else {
            
            if (valueAddedNumber > 0) {
             var sum = valueAddedNumber - 1;
            document.getElementById(valueID).value = sum;
            mobilePriceTotal = mobilePriceNumber - price;
            document.getElementById(elementPrice).innerText = mobilePriceTotal;
            const subTotal = subNumber - price;
            document.getElementById('subTotal').innerText = subTotal;
            
            const totalFinal = totalNumber- price ;
            document.getElementById('total').innerText = totalFinal;

            }else if(valueAddedNumber ==0){
                document.getElementById('tax').innerText= 0;
                document.getElementById('total').innerText =0;
                
            }
            




        }


    })

}

buttonHandler("plusButton", "valueAdded", "mobilePrice", 1219);
buttonHandler("plusButton2", "valueAdded2", "casePrice", 59);

buttonHandler("minusButton", "valueAdded", "mobilePrice", 1219);
buttonHandler("minusButton2", "valueAdded2", "casePrice", 59);