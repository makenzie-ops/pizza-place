$(document).ready(function(){
    $(".pizz1").hover(function (){
        $("hawaianPizz").toggle();
    });
})
function Pizza(type, size,crust,toppings,number)
this.type =type;
this.size = size;
this.crust = crust;
this.toppings = toppings;
this.number = number;
$(document).ready(function(){
    $("form #values").submit(function(event){
        event.preventDefault();
        var inputSize = $("#pizzaSize").val();
        var inputCrust =  $("input:radio[name=typo]:checked").val();
    })
})