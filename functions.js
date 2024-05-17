function food(item){
    console.log("My favourite food is "+item);
}

function order(quantity,price){
    console.log("The quantity of order is "+quantity+" kgs");
    console.log("The price of each kg is "+price+" rupees");
    console.log("The total of the bill is "+quantity*price+" rupees");
}

food("biryani");
order(2,120);