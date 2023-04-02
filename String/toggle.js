/*Given a char[] Toggle every Character
example ch[] = 'aNAcONdA'
*/

function toggleString(string){
    string = string.split('')
    for(var i=0; i<string.length; i++){
        string[i] = String.fromCharCode(string[i].charCodeAt() ^ 32);
    }
    return string.join('');
}


console.log(toggleString('aaaAAAA'));