var total=0;
// $(document).ready(function(){
//     $(".pizz1").hover(function (){
//         $("hawaianPizz").toggle();
//     });
// })
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
        var inputNumber = $("#noPizza").val()
        var deliveryFee =  $("input[name='delivery']:checked").val();
         
        var newPizza = new Pizza( inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee )
        total(inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee);
       
        
    });
});

function total(inputPizza,inputSize,inputCrust,inputToppings,inputNumber,deliveryFee){

}

    switch (inputPizza) {
        case ("Hawaian "):
            switch(inputSize) {
                case ("small"):
                    price = 550;
                    if (inputCrust == "crispy") {
                       totalPrice = (price  * inputNumber )+100;
                    }else if (inputCrust =="stuffed") {
                        totalPrice = (price * inputNumber ) + 50;
                    } else {
                        totalPrice =(price *inputNumber) + 120
                    }
                    s
                    break;
                    case  ("Medium"):
                        price = 750;
                        if (inputCrust == "crispy") {
                         totalPrice = (price  * inputNumber )+100;
                      }else if (inputCrust =="stuffed") {
                          totalPrice = (price * inputNumber ) + 50;
                      } else {
                          totalPrice =(price *inputNumber) + 120
                      }
                      break;
                      case ("Large") :
                        price = 1200;
                        if (inputCrust == "crispy") {
                         totalPrice = (price  * inputNumber )+100;
                      }else if (inputCrust =="stuffed") {
                          totalPrice = (price * inputNumber ) + 50;
                      } else {
                          totalPrice =(price *inputNumber) + 120
                      }
            }
            switch (inputToppings){
                case ("pepperoni"):
                    price = 150
            }

      
    }
