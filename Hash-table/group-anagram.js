/**
 * 
 * https://leetcode.com/problems/group-anagrams/
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  strs.forEach((element) => {
    let str = element.split("").sort().join("");
    if (map.has(str)) {
      const currentVal = map.get(str);
      map.set(str, [...currentVal, element]);
    } else {
      map.set(str, [element]);
    }
  });

  let arr = []
  map.forEach(element=>{
    arr.push(element)
  })

  return arr;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))