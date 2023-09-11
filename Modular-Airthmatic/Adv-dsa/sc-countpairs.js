/**
 * Given ann arr[N], m, calculate no of pairs i, j such that (arr[i]+arr[j])%m=0
 * Note: i!=j and pair (i,j) is same as pair (j, i).
 *
 */

var countPair = function (arr, m) {
  let hm = new Map();
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let itemMod = arr[i]%m;
    if(hm.has(itemMod)){
        hm.set(itemMod, hm.get(itemMod) + 1);
    }else{
        hm.set(itemMod, 1); 
    }
  }

  // case :1 hm[0]
  let x = hm.get(0);
  ans = ans + parseInt((x * (x-1)) /2);

  // case :2 hm[m/2]
  if(m%2==0){
     x = hm.get(m/2);
     ans = ans + parseInt((x * (x-1)) /2);
  }

  // case :3 hm[k] * hm[m-k]
  let i=0, j= m-1;

  while(i<j){
    ans = ans + (hm.get(i) * hm.get(j));
    i++;
    j--;
  }

  return ans;
  
};

console.log(countPair([4,7,6,5,5,3], 3));
