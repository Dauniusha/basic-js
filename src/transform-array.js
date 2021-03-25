const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let special = Symbol();
    let array = [];
    if (!Array.isArray(arr))
        throw Error;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--discard-next" || arr[i] == "--discard-prev" || arr[i] == "--double-next" || arr[i] == "--double-prev") {
            switch (arr[i]) {
                case "--discard-next":
                    array.push(special);
                    i++;
                    break;
                case "--discard-prev":
                    if (i > 0)
                        array.pop();
                    break;
                case "--double-next":
                    if (i < arr.length - 1)
                        array.push(arr[i + 1]);
                    break;
                case "--double-prev":
                    if (array[array.length - 1] == special)
                        break;
                    if (i > 0)
                        array.push(arr[i - 1]);
                    break;
            }  
        }
        else
            array.push(arr[i]);
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == special) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};
