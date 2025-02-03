


export const isPrime = (num) =>{
    if(num <= 1) return false;

    for (let x = 2; x < num; x++){
        if(num % x === 0) return false;
    }
    return true;
};



export const isPerfect = (num) =>{
    let sum = 1;
    for( let y = 2; y * y <= num; y++){
        if(num % y === 0){
            sum += y;
            if(y !== num / y) sum += num / y;
        }
    }
    return sum === num && num !== 1;
};



export const isArmstrong = (num) =>{

    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    while (temp > 0) {
      let remainder = temp % 10;
      sum += Math.pow(remainder, digits);
      temp = Math.floor(temp / 10);
    }
    return sum === num;
};


