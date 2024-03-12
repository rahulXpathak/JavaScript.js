function isEvenOrOdd(x){
    console.trace("Trace of the function ")
    return x%2 == 0 ;
} 
const NamedFunc = function exce(){
    const result1 = isEvenOrOdd(10)
}

const anonymous = function(){
    const result = isEvenOrOdd(5)
}

anonymous()