'use strict';

function hasCanged(newValue, oldValue) {
    let ischange = false;
    console.log(newValue);
    console.log(oldValue)
    for (const key in newValue) {
        if (newValue.hasOwnProperty(key)) {
            console.log(key);
            console.log(newValue[key] === oldValue[key]);
            if(newValue[key] !== oldValue[key]){
                ischange = true;
                break;
            }
        }
    }
    return ischange;
}

module.exports = {
    hasCanged
};
