function CheckCharacterCount(str){
    let freq = {}
    for(let i=0;i<str.length; i++){
        let char = str[i]
        if(freq[char]===undefined){
            freq[char] = 1
        } else{
            freq[char] = freq[char] + 1;
        }
    }
    for(let key in freq){
        console.log(key + ":" + freq[key])
    }
}

CheckCharacterCount("banana")