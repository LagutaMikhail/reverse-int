module.exports = function reverse (n) {
  let s = String(Math.abs(n));
  let res ="";
    for (let i = s.length-1; i>=0; i--){
      res+=s[i];
  }
  return Number(res);
}
