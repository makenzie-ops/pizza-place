var totalPrice=0;


function Pizza(type, size,crust,toppings,number){
    this.type =type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;


}


$(document).ready(function(){
    $("#values").click(function(event){

        event.preventDefault();
        var inputPizza = $(".which").val();
        var inputSize = $("#pizzaSize").val();
        var inputCrust =  $("input[name='typo']:checked").val();
        var inputToppings= $("#pizzaToppings").val();
        var inputNumber = parseInt($("#noPizza").val());
        var deliveryFee =  $("input[name='delivery']:checked").val();
         
        var newPizza = new Pizza( inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee )
        total(inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee);
        $(".typeOfPizza").text(newPizza.type);
        $(".crustresult").text(newPizza.crust)
        $(".sizeResult").text(newPizza.size)
        $(".toppingsResult").text(newPizza.toppings)
        $(".numberResult").text(newPizza.number)
        $(".total").text(totalPrice)
        
        

        totalPrice=0;
       
        
    });
});

function total(inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee){
    
    switch (inputPizza) {        
        case ("Hawaian"):
            switch(inputSize) {
                case ("small"):
                    price = 550;
                    if (inputCrust === "crispy") {
                       totalPrice = totalPrice +(price  * inputNumber )+100;
                       
                    }else if (inputCrust ==="stuffed") {
                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                    } else {
                        totalPrice =totalPrice +(price *inputNumber) + 120
                    }
                    
                    break;
                    case  ("medium"):
                        price = 750;
                        if (inputCrust === "crispy") {
                         totalPrice =totalPrice + (price  * inputNumber )+100;
                      }else if (inputCrust ==="stuffed") {
                          totalPrice =totalPrice + (price * inputNumber ) + 50;
                      } else {
                          totalPrice =totalPrice +(price *inputNumber) + 120
                      }
                      break;
                      case ("large") :
                        price = 1100;
                        if (inputCrust == "crispy") {
                         totalPrice =totalPrice + (price  * inputNumber )+100;
                      }else if (inputCrust =="stuffed") {
                          totalPrice =totalPrice + (price * inputNumber ) + 50;
                      } else {
                          totalPrice =totalPrice +(price *inputNumber) + 120;
                      }
                      break;
                      case ("extraLarge") :
                        price = 1200;
                        if (inputCrust == "crispy") {
                         totalPrice =totalPrice + (price  * inputNumber )+100;
                      }else if (inputCrust =="stuffed") {
                          totalPrice =totalPrice + (price * inputNumber ) + 50;
                      } else {
                          totalPrice =totalPrice +(price *inputNumber) + 120;
                      }
                    }
                      break;
            case ("MeatDeluxe"):
                switch(inputSize) {
                    case ("small"):
                        price = 550;
                        if (inputCrust === "crispy") {
                        totalPrice = totalPrice +(price  * inputNumber )+100;
                        
                        }else if (inputCrust ==="stuffed") {
                            totalPrice =totalPrice + (price * inputNumber ) + 50;
                        } else {
                            totalPrice =totalPrice +(price *inputNumber) + 120
                        }
                        
                        break;
                        case  ("medium"):
                            price = 750;
                            if (inputCrust === "crispy") {
                            totalPrice =totalPrice + (price  * inputNumber )+100;
                        }else if (inputCrust ==="stuffed") {
                            totalPrice =totalPrice + (price * inputNumber ) + 50;
                        } else {
                            totalPrice =totalPrice +(price *inputNumber) + 120
                        }
                        break;
                        case ("large") :
                            price = 1100;
                            if (inputCrust == "crispy") {
                            totalPrice =totalPrice + (price  * inputNumber )+100;
                        }else if (inputCrust =="stuffed") {
                            totalPrice =totalPrice + (price * inputNumber ) + 50;
                        } else {
                            totalPrice =totalPrice +(price *inputNumber) + 120;
                        }
                        break;
                        case ("extraLarge") :
                            price = 1200;
                            if (inputCrust == "crispy") {
                            totalPrice =totalPrice + (price  * inputNumber )+100;
                        }else if (inputCrust =="stuffed") {
                            totalPrice =totalPrice + (price * inputNumber ) + 50;
                        } else {
                            totalPrice =totalPrice +(price *inputNumber) + 120;
                        }
                    }
                        break;
                    case ("chickenbacon"):
                         switch(inputSize) {
                                case ("small"):
                                    price = 550;
                                    if (inputCrust === "crispy") {
                                    totalPrice = totalPrice +(price  * inputNumber )+100;
                                    
                                    }else if (inputCrust ==="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120
                                    }
                                    
                                    break;
                                    case  ("medium"):
                                        price = 750;
                                        if (inputCrust === "crispy") {
                                        totalPrice =totalPrice + (price  * inputNumber )+100;
                                    }else if (inputCrust ==="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120
                                    }
                                    break;
                                    case ("large") :
                                        price = 1100;
                                        if (inputCrust == "crispy") {
                                        totalPrice =totalPrice + (price  * inputNumber )+100;
                                    }else if (inputCrust =="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120;
                                    }
                                    break;
                                    case ("extraLarge") :
                                        price = 1200;
                                        if (inputCrust == "crispy") {
                                        totalPrice =totalPrice + (price  * inputNumber )+100;
                                    }else if (inputCrust =="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120;
                                    }
                                }
                                    break;
                                 
                    case ("Vegeterianpizza"):
                        switch(inputSize) {
                                case ("small"):
                                    price = 550;
                                    if (inputCrust === "crispy") {
                                    totalPrice = totalPrice +(price  * inputNumber )+100;
                                    
                                    }else if (inputCrust ==="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120
                                    }
                                    
                                    break;
                                    case  ("medium"):
                                        price = 750;
                                        if (inputCrust === "crispy") {
                                        totalPrice =totalPrice + (price  * inputNumber )+100;
                                    }else if (inputCrust ==="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120
                                    }
                                    break;
                                    case ("large") :
                                        price = 1100;
                                        if (inputCrust == "crispy") {
                                        totalPrice =totalPrice + (price  * inputNumber )+100;
                                    }else if (inputCrust =="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120;
                                    }
                                    break;
                                    case ("extraLarge") :
                                        price = 1200;
                                        if (inputCrust == "crispy") {
                                        totalPrice =totalPrice + (price  * inputNumber )+100;
                                    }else if (inputCrust =="stuffed") {
                                        totalPrice =totalPrice + (price * inputNumber ) + 50;
                                    } else {
                                        totalPrice =totalPrice +(price *inputNumber) + 120;
                                    }
                                    
                }
                break;
                 

      
    }



switch (inputToppings){
    case ("pepperoni"):
        totalPrice =totalPrice + 150;
        break;
        case ("mushroom"):
            totalPrice=totalPrice +100;
            break;
            case ("onion"):
                totalPrice=totalPrice +100;
                break;
                case ("sausages"):
                    totalPrice =totalPrice+150;
                    break;
                case ("Bacon"):
                totalPrice =totalPrice + 200;
                break;
                case ("cheese"):
                totalPrice =totalPrice+ 150;
                break;
                case ("olive"):
                    totalPrice =totalPrice+ 100;
                    break;

}
switch (deliveryFee){
    case ("yes"):
    if (deliveryFee === "yes"){
        var dev = prompt("Please enter your delivery address");
        alert("Your delivery will be made to "+dev+" Thank you! Happy meals");
    } 
    break;
    case("no"):
 if (deliveryFee === "no") {
        alert(" Happy meals !Come for your food at our nearest station");
    }
}
 

}
