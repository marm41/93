var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var replaceText = text.replace('Velociraptor', dinosaurUpperCased);
var polowaZnakow = replaceText.length/2;

var replaceTextShort = replaceText.substr(0, polowaZnakow);

console.log(replaceTextShort);