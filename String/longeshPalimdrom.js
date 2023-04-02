/*Find Longest Palimdron substring from given string*/

function expand(string, p1, p2) {
  while (p1 >=0 && p2 < string.length && string[p1] == string[p2]) {
    p1--;
    p2++
  }
  return p2-p1-1
}

function logestPalimdrom(string) {
    string = string.split('');
    var N = string.length;
    var ans = 0;
    var temp = []
    for(var i=0;i<N;i++){
        // string[i] acting as a center
        ans = Math.max(ans,expand(string, i, i));
    }

    for(var i=0;i<N-1;i++){
        // string[i] and string[i+1] are center
        ans = Math.max(ans,expand(string, i, i+1));
    }
    return ans;
}

//console.log(logestPalimdrom("xbdyzzydbdyzydx"));
console.log(logestPalimdrom("xbdzzydbdyzydx"));
