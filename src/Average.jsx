// This is a component designed to calculate average of numbers
// Average finding App:
//   - Inputs from <input> tag
//   - using useState() to store Array of numbers
//   - Add <button>: to add number into Array
//   - Average <button>: to calculate average of numbers in the Array

import { useState } from 'react';

function Average() {
    let [numbers, setNumbers]=useState([]);
    let [average, setAverage]=useState(0);

    function onAdd(event){
        event.preventDefault();
        setNumbers([...numbers, event.target.inputNumber.value]);
    }

    function clearAll(){
        setNumbers([]);
    }
    function getAverage(){
        let sum = 0;
        if (numbers.length===0) {
            setAverage(0);
        }else{
            numbers.forEach(function(num) {
                sum+=Number(num);
            });
            average = (sum / numbers.length);
            setAverage(average);
        }
    }

    return(
        <div className='Average'>
            <h1 className='averageHead'>Average of Numbers is {average}</h1>
            <form onSubmit={onAdd}>
                <input type="number" name='inputNumber' placeholder='Enter a Number'/>
                <div className='operationButtons'>
                <input type="submit" name='addNumber' value="Add Number"/>
                    <input type="button" name='clearAll' value="Clear All" onClick={clearAll}/>
                    <input type="button" name='getAverage' value="Average" onClick={getAverage}/>
                </div>
            </form>
            <div className='numList'>
                {numbers.toString()}
            </div>
        </div>
    );
}
export default Average;