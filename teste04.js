function reverterString(str){
    var String = "";
    for (var i = str.length - 1; i >= 0; i--){
        String += str[i];
    }
    return String;
}
//reverterString("oroboro");
console.log(reverterString("Olá, mundo!")); 
