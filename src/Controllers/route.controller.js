


import axios from 'axios';
import { isPerfect, isPrime, isArmstrong } from "./helper.functions.js";
export const routerController = async(req, res)=>{

    let numStr = req.query.number;


 
        if (!/^-?\d+$/.test(numStr)) {
            return res.status(400).json({ number: "alphabet or invalid character", error: true });
        }
    
        // Parse the number after validation
        const num = parseInt(numStr);


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

        const absoluteSum = Math.abs(num).toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        const digitSum = num < 0 ? -absoluteSum : absoluteSum;

        const response = {
            number: num.toString(),
            is_prime: isPrime(num).toString(),
            is_perfect: isPerfect(num).toString(),
            properties: [],
            digit_sum: digitSum.toString(),
            fun_fact: funFact
        };

        if ((num >= 1 && num <= 9) || (num >= -9 && num <= -1)) {
            response.properties.push('armstrong');
        } else if (isArmstrong(num)) {
            response.properties.push('armstrong');
        }

        if (num % 2 !== 0) {
            response.properties.push('odd');
        } else {
            response.properties.push('even');
        }
    
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching the number API', error)
        res.status(500).json({message: "Server error"});
        
    }
}

