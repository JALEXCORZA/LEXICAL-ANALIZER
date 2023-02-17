const tvoid1=/^void/;
//const identificadores=/(?<=int\s+|\s*\,)\s*\w+/g;
let str=" int a = 10, b = 20;";
function analizador(){
const selectivas=/\s*if\s*|switch|case|else/;
const refor=/\s*for\s*\(\w+\s*\=\s*(\+|\-)?\w+\;\s*\w+\s*(\<|\>|\<\=|\>\=)\s*(\w+((\+|\-)\w+)?)\;\s*((\w+(\+\+|\-\-))|((\+\+|\-\-)\w+))\)/;
const efor=/for/;
const rewhile=/while\s*\(\w+/;
const redo=/do\s*\(\w+/;  
const tint=/int\s+/g;
const tchar=/char/;
const tvoid=/^void/;
const tfloat=/float/;
const tdouble=/double/;
const calificadores=/(short|long|signed|unsigned)\s/;
const preprocesador=/(include|define)/;
const reif=/if/;
const entero=/\d+/g;
const flotante=/\d*\.\d+/;
const identificadores=/(?<=int\s+|\s*\,|char\s+|float|double)\s*\*?\w+/g;
//Relacionales: >, =, <=, ==, != Asignación: =, +=, -=, *=, /= 
const simboloespecial=/\(|\)|\[|\]\#|\{|\}|\;|\=|\<|\>|\=\=|\<\=|\>\=|\&\&|\|\||\!|\+\+|\-\-|\+\=|\-\=|\*\=|\/\=|\+|\-|\*|\/|\%/g;
const reservadas=/return\s+\w*(\+|\-)?\w*\;|main\(\w*\)/;
const error1=/void/;
const ereturn0=/return/;
const breturn=/return\s+\w*(\+|\-)?\w*\;/;
const eprintf=/printf/;
const bprintf=/\s*printf\s*\(\"((\:|\,|\[|\]|\%|\\)*\w+(\:|\,|\[|\]|\\)*\s*)+\"(\,\s*\w*(\+|-)?\w*(\+|-)?\w*\s*)*\)\;/;

    document.getElementById('fl').onchange = function(){

var fl = this.files[0];


var reader = new FileReader();
reader.onload = function(progressEvent){
// Entire file
console.log(this.result);

// By allrows
var allrows = this.result.split('\n');

for(var row = 0; row < allrows.length; row++){
  console.log("Line "+row+"-->"+allrows[row]);
if(preprocesador.test(allrows[row])){
}
//tipos de datos
if(tint.test(allrows[row])){
  let contenedor=allrows[row].match(tint);
for(let i=0;i<contenedor.length;i++){
  addRow("tipo de dato",allrows[row],"INT");
  }
console.log(contenedor);
}
if(tint.test(allrows[row])){
  let contenedor=allrows[row].match(identificadores);
for(let i=0;i<contenedor.length;i++){
  addRow("identificador",contenedor[i],contenedor[i]);
  }
console.log(contenedor);
}

if(tchar.test(allrows[row])){
  let contenedor=allrows[row].match(tchar);
for(let i=0;i<contenedor.length;i++){
  addRow("tipo de dato",allrows[row],"CHAR");
 }
console.log(contenedor);
}
if(tvoid.test(allrows[row])){
  let contenedor=allrows[row].match(tchar);
for(let i=0;i<contenedor.length;i++){
  addRow("tipo de dato",allrows[row],"VOID");
 }
console.log(contenedor);
}
if(tdouble.test(allrows[row])){
  let contenedor=allrows[row].match(tchar);
for(let i=0;i<contenedor.length;i++){
  addRow("tipo de dato",allrows[row],"DOUBLE");
 }
console.log(contenedor);
}
if(tfloat.test(allrows[row])){
  let contenedor=allrows[row].match(tchar);
for(let i=0;i<contenedor.length;i++){
  addRow("tipo de dato",allrows[row],"FLOAT");
 }
console.log(contenedor);
}




if(entero.test(allrows[row])){
  let contenedor1=allrows[row].match(entero);
  for(let i=0;i<contenedor1.length;i++){
  addRow("Numero entero",contenedor1[i],contenedor1[i]);
  }
  console.log(contenedor1);
}
if(flotante.test(allrows[row])){
  let contenedor1=allrows[row].match(flotante);
  for(let i=0;i<contenedor1.length;i++){
  addRow("Numero entero",contenedor1[i],contenedor1[i]);
  }
  console.log(contenedor1);
}
if(reservadas.test(allrows[row])){
  let contenedor=reservadas.exec(allrows[row]);
  addRow("palabra reservada",contenedor.input,contenedor);
console.log(contenedor);
}
if(selectivas.test(allrows[row])){
  let contenedor1=allrows[row].match(selectivas);
for(let j=0;j<contenedor1.length;j++){
  switch(contenedor1[j]){
    case "/\s*if\s*/":
      addRow("Estructura selectiva",contenedor1[j],"IF");
      break;
    case "switch":
      addRow("Estructura selectiva",contenedor1[j],"SWITCH");
      break;
    case "case":
      addRow("Estructura selectiva",contenedor1[j],"CASE");
      break;
    case "else":
      addRow("Estructura selectiva",contenedor1[j],"ELSE");
      break;
    

  }
}


  console.log(contenedor1);


}
if(refor.test(allrows[row])){ 
  let contenedor1=allrows[row].match(refor);
  //for(let j=0;j<contenedor1.length;j++){
        addRow("Estructura repetitiva",contenedor1.input,"FOR");   
  //}
    console.log(contenedor1)
}
if(rewhile.test(allrows[row])){ 
  let contenedor1=allrows[row].match(rewhile);
  for(let j=0;j<contenedor1.length;j++){
        addRow("Estructura repetitiva",contenedor1[j],"WHILE");   
  }
    console.log(contenedor1)
}
if(redo.test(allrows[row])){ 
  let contenedor1=allrows[row].match(redo);
  for(let j=0;j<contenedor1.length;j++){
        addRow("Estructura repetitiva",contenedor1.input,"DO");   
  }
    console.log(contenedor1)
}

/*- Aritméticos: +, -, *, /, % 
- Lógicos: &&, ||, ! 
- Relacionales: >, =, <=, ==, != 
- Asignación: =, +=, -=, *=, /= 
- Incremento: ++, --
*/
if(simboloespecial.test(allrows[row])){
  let contenedor1=allrows[row].match(simboloespecial);
for(let j=0;j<contenedor1.length;j++){
  switch(contenedor1[j]){
    //especiales
    case "(":
      addRow("Simbolo especial",contenedor1[j],"parentesis abre");
      break;
    case ")":
      addRow("Simbolo especial",contenedor1[j],"parentesis cierra");
      break;
    case "[":
      addRow("Simbolo especial",contenedor1[j],"corchete abre");
      break;
    case "]":
      addRow("Simbolo especial",contenedor1[j],"corchete cierra");
      break;
    case "{":
        addRow("Simbolo especial",contenedor1[j],"llave abre");
      break;
    case "}":
        addRow("Simbolo especial",contenedor1[j],"llave cierra");
      break;
    case "#":
        addRow("Simbolo especial",contenedor1[j],"sharp");
      break;
    case ";":
        addRow("Simbolo especial",contenedor1[j],"punto y coma");
      break;


      //aritmeticos
        case "+":
          addRow("operador aritmetico",contenedor1[j],"suma");
          break;
        case "-":
          addRow("operador aritmetico",contenedor1[j],"menos");
          break;
        case "*":
          addRow("operador aritmetico",contenedor1[j],"multiplicacion");
          break;
        case "/":
          addRow("operador aritmetico",contenedor1[j],"division");
          break;
        case "%":
          addRow("operador aritmetico",contenedor1[j],"modulo");
          break;

//logicos
      case "&&":
        addRow("operador logico",contenedor1[j],"AND");
        break;
      case "||":
        addRow("operador logico",contenedor1[j],"OR");
        break;
      case "!":
        addRow("operador logico",contenedor1[j],"NOT");
        break;
  //relacionales
      case "<":
        addRow("operador relacional",contenedor1[j],"menor que");
        break;
  case ">":
      addRow("operador relacional",contenedor1[j],"mayor que");
    break;
  case "=":
      addRow("operador relacional",contenedor1[j],"igual");
    break;
    case "<=":
        addRow("operador relacional",contenedor1[j],"menor igual");
        break;
      case ">=":
          addRow("operador relacional",contenedor1[j],"mayor igual");
        break;
      case "==":
          addRow("operador relacional",contenedor1[j],"igual que");
        break;
        case "!=":
          addRow("operador relacional",contenedor1[j],"diferente");
        break;

 //asignacion
        case "=":
          addRow("asignacion",contenedor1[j],"menor que");
          break;
        case "+=":
            addRow("asignacion",contenedor1[j],"mayor que");
          break;
        case "-=":
            addRow("asignacion",contenedor1[j],"igual");
          break;
          case "*=":
              addRow("asignacion",contenedor1[j],"menor igual");
              break;
            case "/=":
                addRow("asignacion",contenedor1[j],"mayor igual");
              break;
 //incremento
 case "++":
  addRow("asignacion",contenedor1[j],"incrememto");
  break;
case "--":
    addRow("asignacion",contenedor1[j],"decremento");
  break;



  }
}


  console.log(contenedor1);

}
if(calificadores.test(allrows[row])){

  let contenedor1=allrows[row].match(calificadores);
for(let j=0;j<contenedor1.length;j++){
  switch(contenedor1[j]){
    case "short":
      addRow("calificador",contenedor1[j],"SHORT");
      break;
    case "double":
      addRow("calificador",contenedor1[j],"DOUBLE");
      break;
    case "unsigned":
      addRow("calificador",contenedor1[j],"UNSIGNED");
      break;
    case "long":
      addRow("calificador",contenedor1[j],"LONG");
      break;
    case "\w*signed\w*":
        addRow("calificador",contenedor1[j],"SIGNED");
      break;
    

  }
}
  console.log(contenedor1);  
}

if(preprocesador.test(allrows[row])){

  let contenedor1=allrows[row].match(preprocesador);
for(let j=0;j<contenedor1.length-1;j++){
  switch(contenedor1[j]){
    case "include":
      addRow("instruccion de preprocesador",contenedor1[j],"INCLUDE");
      break;
    case "define":
      addRow("instruccion de preprocesador",contenedor1[j],"DEFINE");
      break;
   
    

  }
}
  console.log(contenedor1);  
}




//ERRORES
if(ereturn0.test(allrows[row])){
  if(breturn.test(allrows[row])){
    console.log(allrows[row]);
  }
  else{
    addRow1(row+1,allrows[row]);
  }

}
if(error1.test(allrows[row])){
  if(tvoid.test(allrows[row])){
    console.log(allrows[row]);
  }
  else{
    addRow1(row+1,allrows[row]);
  }

}
if(eprintf.test(allrows[row])){
  if(bprintf.test(allrows[row])){
    console.log(allrows[row]);
  }
  else{
    addRow1(row+1,allrows[row]);
  }

}
if(efor.test(allrows[row])){
  if(refor.test(allrows[row])){
    console.log(allrows[row]);
  }
  else{
    addRow1(row+1,allrows[row]);
  }

}

}
};

reader.readAsText(fl);

};
}
const addRow = (comp,lexema,valor) => {
  document.getElementById('table').insertRow(-1).innerHTML = '<tr><td>'+comp+'</td><td>'+lexema+'</td><td>'+valor+'</td></tr>'
}
const addRow1 = (linea,error) => {
  document.getElementById('table1').insertRow(-1).innerHTML = '<tr><td>'+linea+'</td><td>'+error+'</td></tr>'
}