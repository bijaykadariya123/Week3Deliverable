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

const $h2 = $("<h2>");
$h2.html("Bijay");
$container.append($h2);
const $h3 = $("<h3>").html("RavenClaw");
$container.append($h3);
const $h4 = $("<h4>").addClass("pet").html("owl");
$container.append($h4);
const $h42 = $("<h4>").html(
  "If You Were To Enter The Magical World Of Harry Potter Which Villon Would You Be?"
);
$container.append($h42);
