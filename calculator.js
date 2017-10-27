export function calculator(expression) {

    //convert expression string to array, and then parse the string of number to number
    // e.g '3 1 + 2 -' to [3,1,'+',2,'-']
    let resultArr = expression.split(' ').map(item => {
        const num = parseFloat(item)
        if (isNaN(num)) return item
        else return num
    })


    //loop the array, until one number left in array
    while (Array.isArray(resultArr) && resultArr.length > 1) {
        resultArr = calcFirstOperator(resultArr)
    }

    if (Array.isArray(resultArr)) return resultArr[0];
    else return null;
}


/*
Find the first operator in the array, calculate the previous 2 numbers with the operator. replace the already calculated number and operator with the result 

e.g input [3,1,'+',2,'-'] returns [4,2,'-']
*/
function calcFirstOperator(arr) {

    const operator = ['+', '-', '*', '/']
    let result
    let index
    let i = 0
    while (result === undefined) {
        if (operator.indexOf(arr[i]) > -1) {
            result = calc(arr[i], arr[i - 2], arr[i - 1]);
            if (!isNaN(parseFloat(result))) {
                arr.splice(i - 2, 3, result)
                return arr
            }
            else return null

        }
        i++;
    }
    if (result === undefined) return null;
}

/*
do the calulation with one operator and two number, return null if it is not valid value

e.g input ('+', 3, 1) returns 4
*/
function calc(operator, num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operator) {
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case '*':
                return num1 * num2
            case '/':
                return num1 / num2
        }
        return null
    }
    else {
        return null
    }


}