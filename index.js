
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
