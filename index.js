
function  kittens(){
  var kittens=["Milo", "Otis", "Garfield"]
  console.log(kittens)
}

function destructivelyAppendKitten(){
kittens=[...kittens,'Ralph']
console.log(kittens)
}
