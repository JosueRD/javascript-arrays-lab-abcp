
function  kittens(){
  var kittens=["Milo", "Otis", "Garfield"]
  console.log(kittens)
}

function destructivelyAppendKitten(name){
var kittens=["Milo", "Otis", "Garfield"]
kittens=[...kittens,name]
return kittens
}
