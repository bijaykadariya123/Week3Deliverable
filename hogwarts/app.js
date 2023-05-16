/*
if (typeof jQuery == "undefined") {
  console.log("oops! I stil have to link my jQuery properly!");
} else {
  console.log("I did it! I linked jQuery and this js file!");
}
*/
//----------------------------------Year 1----------------------------------------------------/
const $container = $("#container");
// console.log($container);
const $h1 = $("<h1>").html("Hogwarts");
$container.append($h1);
