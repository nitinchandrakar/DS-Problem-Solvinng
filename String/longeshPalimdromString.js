/*Find Longest Palimdron substring from given string*/

function expand(string, p1, p2) {
  let substring = ''
 
  while (p1 >=0 && p2 < string.length && string[p1] == string[p2]) {
    if(p1==p2){
      substring += string[p1]
    }else{
      substring = string[p1]+substring + string[p2]
    }
   
    p1--;
    p2++
  }
  return substring
}

function logestPalimdrom(string) {
    string = string.split('');
    var N = string.length;
    var ans = '';
    for(var i=0;i<N;i++){
        // string[i] acting as a center
        let subStr = expand(string, i, i);
        if(subStr.length>ans.length){
          ans = subStr;
        }
    }

    for(var i=0;i<N-1;i++){
        // string[i] and string[i+1] are center
        let subStr = expand(string, i, i+1);
        if(subStr.length>ans.length){
          ans = subStr;
        }
    }
    return ans;
}

//console.log(logestPalimdrom("xbdyzzydbdyzydx"));
console.log(logestPalimdrom("abb"));
console.log(logestPalimdrom("aaaabaaa"));
