const ftoc = function(temperature) {
  temp=(temperature-32)*5/9;
  temp=Math.round(temp*10)/10;
  return temp;



};

const ctof = function(temperature) {
  temp=(temperature* 9/5)+32;
  temp=Math.round(temp*10)/10;
  return temp;



};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
