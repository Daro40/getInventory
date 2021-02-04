import { company, commerce } from 'faker';

export function handler(event, context) {
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
    return company.catchPhraseNoun() + " " + company.catchPhraseDescriptor() + " " + shoeType;
}

function getShoeColor(){
    return commerce.color();
}

function getShoeDescription(shoeType){
    return "A(n) " + commerce.productAdjective() + ", "+ shoeType + "made of " + commerce.productMaterial();
}

function getShoeSize(){
    return getNum(1,13);
}

function getShoePrice(){
    return commerce.price();
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