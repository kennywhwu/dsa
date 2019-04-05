// Given two strings, return the index of the first instance where second string exists in first string, or -1 if doesn't exist

// https://leetcode.com/problems/implement-strstr/

function strStr(haystack, needle) {
  // let pointer = 0
  if(needle.length === 0 || haystack === needle) return 0
  for(let i = 0; i < haystack.length-needle.length+1; i++){
      if(haystack[i] === needle[0]){
          let p1 = i+1
          let p2 = 1
          while(p2 < needle.length){
              if(haystack[p1] === needle[p2]){
                  p1++
                  p2++
              } else {
                  break
              }
          }
          if(p2 === needle.length) return i
      }
  }
  return -1
};

module.exports = strStr