
function  kittens(){
  var kittens=["Milo", "Otis", "Garfield"]
  console.log(kittens)
}

function destructivelyAppendKitten(name){
var kittens=["Milo", "Otis", "Garfield"]
kittens=[...kittens,'Ralph']
return kittens
}
