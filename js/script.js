let add = (function() {
  let total = 0;
  return function(x) {
    return total += Number(x);
  }
})();
