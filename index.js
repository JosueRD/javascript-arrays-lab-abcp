
function  kittens(){
  var kittens=["Milo", "Otis", "Garfield"]
  console.log(kittens)
}

function destructivelyAppendKitten(x){
  kittens.push(x)
console.log(kittens)
}
function destructivelyPrependKitten(x){
  kittens.unshift(x)
console.log(kittens)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
console.log(kittens)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
console.log(kittens)
}
function appendKitten(name)
x=[name,...kittens]
return x