let p = fetch("https://goweather.xyz/weather/Ny"); //Promise
p.then((value1) => {
  console.log(value1.headers);
  return value1.json();
}).then((value2) => {
  console.log(value2);
});
