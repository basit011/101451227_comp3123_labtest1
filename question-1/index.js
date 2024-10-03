function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            
            const strArray = mixedArray.filter((word) => typeof word === 'string')
                            .map(word => word.toLowerCase());

            resolve(strArray); 
        } catch (error) {
            reject(error); 
        }
    });
}

const lowerCaseWordsInput = ['Pizza', 10, true, 25, 'Wings', false];


lowerCaseWords(lowerCaseWordsInput).then(result => {
    console.log(result); 
}).catch(error => { 
    console.error(error); 
});