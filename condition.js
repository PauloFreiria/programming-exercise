function numberComparison(num1, num2) {
    if (num1 > num2) {
        return "The number 1 is greater than number 2";
    } else if (num1 < num2) {
        return "The number 1 is less than number 2";
    } else {
        return "The numbers are equal";
    }
}

console.log(numberComparison(10, 5));  // The number 1 is greater than number 2


function numberCheck(number) {
    if (number > 0) {
        return "The number is positive";
    } else if (number < 0) {
        return "The number is negative";
    } else {
        return "The number is zero";
    }
}

console.log(numberCheck(100));  // The number is negative

function dayOfWeek(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

console.log(dayOfWeek(3));  // Wednesday