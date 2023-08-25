class LogicRegister {
 constructor(){

 }

 validInput(input){
  const allowedChars = /^[WMC]+$/;
  return allowedChars.test(input);
 }

  register ( input ){


    if( !this.validInput(input) ) return false;


    // inicializar contador
    const counts = {
      'M': 0,
      'W': 0,
      'C': 0
    };

    // contar
    for (var char of input.split('')) {
      if (char === 'M') {
        counts['M']++;
      } else if (char === 'W') {
        counts['W']++;
      } else if (char === 'C') {
        counts['C']++;
      }
    }

    // tener en cuanta prioridad
    const sortedKeys = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    let output = '';
    for (const key of sortedKeys) {
      if (counts[key] > 0) {
        output += `${counts[key]}${key}`;
      }
    }
    // no devolver, solo imprimir en consola
    console.log('Procesado:: '+ output)
    return true;
  }


}
module.exports = LogicRegister;

//
