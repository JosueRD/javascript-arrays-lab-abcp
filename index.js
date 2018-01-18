
function  kittens(){
  var kittens=["Milo", "Otis", "Garfield"]
  console.log(kittens)
}

function destructivelyAppendKitten(x){
kittens=[...kittens,x]
console.log(kittens)
}
