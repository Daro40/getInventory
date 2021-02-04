var faker = require('faker');

exports.handler = function(event, context) {
    var inventory = [];
    for (i = 0; i< 10; i++){
        var shoe = {};
        var shoeType = getShoeType();
        shoe.name = getShoeName(shoeType);
        shoe.color = getShoeColor();
        shoe.description = getShoeDescription(shoeType);
        shoe.size = getShoeSize();
        shoe.price = getShoePrice();

        inventory.push(shoe)
    }
    context.succeed(inventory);
}
function getShoeName(shoeType){
    return faker.company.catchPhraseNoun() + " " + faker.company.catchPhraseDescriptor() + " " + shoeType;
}

function getShoeColor(){
    return faker.commerce.color();
}

function getShoeDescription(shoeType){
    return "A(n) " + faker.commerce.productAdjective() + ", "+ shoeType + "made of " + faker.commerce.productMaterial();
}

function getShoeSize(){
    return getNum(1,13);
}

function getShoePrice(){
    return faker.commerce.price();
}

function getShoeType(){
    var shoeType= [
        "running shoe",
        "cross-training shoe",
        "tennis shoe",
        "basketball shoe",
        "football shoe",
        "bike automatic shoe"
    ]
    return shoeType[getNum(0,5)];
}

function getNum(min,max){
    return Math.floor(Math.random()*(max-min +1))+min;
}