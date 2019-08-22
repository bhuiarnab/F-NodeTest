
exports.applyPromotionRule = (cart,priceObject,callback) => {

    var totalPrice = 0;

if(Array.isArray(cart) && cart.length != 0){

    var resultObj = {};

cart.map(ele => {
if(resultObj[ele]){
  resultObj[ele] = +(resultObj[ele]) + 1;
}else{
    resultObj[ele] = 1;
}
});

for(let item of Object.entries(resultObj)){
if(item[0] == 'A'){

    totalPrice += Math.floor(item[1] / 3) * 75 + (item[1] - (Math.floor(item[1] / 3) * 3 ) ) * priceObject['A'] ;

}else if(item[0] == 'B'){
    totalPrice += Math.floor(item[1] / 2) * 35 + (item[1] - (Math.floor(item[1] / 2) * 2 ) ) * priceObject['B'] ;
}
else if(item[0] == 'C'){

    totalPrice += item[1] * priceObject['C'];
}
else if(item[0] == 'D'){
    totalPrice += item[1] * priceObject['D'];
}

}
if(totalPrice > 150){
    totalPrice -= 20;
}
callback(totalPrice);

}

};