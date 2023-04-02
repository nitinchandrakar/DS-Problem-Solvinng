/*Sort the string s[] all the characters are in lowercase*/

function sortLowerCaseString(string){
    var count = Array(26).fill(0);
    string = string.split('');

    
    for(var i=0;i<string.length;i++){
        var index = (string[i].charCodeAt() - 97 );
        count[index] = count[index] +1;
    }
    
    var k =0;
    for(var i=0;i<26;i++){
        var ch = 97 + i;
        for(var j=0;j<count[i];j++){
            string[k] = String.fromCharCode(ch);
            k++;
        }
    }

    return string;
}

console.log(sortLowerCaseString('abaabcabdc'))