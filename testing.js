function WordCounter(files) {
    let wordObject = {}
    for(let i =0; i < files.length; i++) {
        console.log(files[i]);
        let words = files[i].split(" ");
        words.forEach((val, i) => {
            console.log(val)
            let cleanWord = val.replace(/,/g, "");
            cleanWord = cleanWord.replace(/\./g, "");
            cleanWord = cleanWord.toLowerCase();
            if(cleanWord === "") {
                return;
            }
            if(!wordObject[cleanWord])
                wordObject[cleanWord] = 1;
            else {
                wordObject[cleanWord] += 1;
            }
        });
    }
    let objectKeys = Object.keys(wordObject).sort();
    let resultsObject = [];
    objectKeys.forEach((val, i) => {
        resultsObject.push(val + " - "+wordObject[val]);
    });
    return resultsObject;
}