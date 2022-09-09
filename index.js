function receivesAFunction(callback){
    callback();
}
const afunction=function(){}
const returnsANamedFunction=function(){
    return afunction;
}

function returnsAnAnonymousFunction(){
    return function(){}
}