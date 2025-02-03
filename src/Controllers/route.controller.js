


import axios from 'axios';
import { isPerfect, isPrime, isArmstrong } from "./helper.functions.js";
export const routerController = async(req, res)=>{

    const num = parseInt(req.query.number);
    if(isNaN(num)){
        return res.status(400).json({number: "alphabet", error: true});
    }


    let funFact = '';

    // Get the fun fact from the Numbers API
    try {
      const resFun = await axios.get(`http://numbersapi.com/${num}/math`);
      funFact = resFun.data;
    } catch (error) {
      console.error('Error fetching fun fact:', error);
      funFact = 'Unable to retrieve fun fact at the moment.';
    }


    try {
        const response = {
            number: num.toString(),
            is_prime: isPrime(num).toString(),
            is_perfect: isPerfect(num).toString(),
            properties: [],
            digit_sum: num.toString().split(' ').reduce((acc, digit) => acc + parseInt(digit), 0).toString(),
            fun_fact: funFact
        };
    
        if(isArmstrong(num) && num % 2 !== 0){
            response.properties.push('armstrong', 'odd')
        } else if(isArmstrong(num) && num % 2 === 0){
            response.properties.push('armstrong', 'even')
        } else if(!isArmstrong(num) && num % 2 !== 0){
            response.properties.push('odd')
        } else if(!isArmstrong(num) && num % 2 === 0){
            response.properties.push('even')
        }
    
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching the number API', error)
        res.status(500).json({message: "Server error"});
        
    }
}

