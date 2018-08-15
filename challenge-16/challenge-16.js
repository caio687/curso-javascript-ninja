(function() {
  'use strict'
  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log( 'As letras do seu nome:' );
  let name = 'Caio'

  let nameArray = name.split('')

  nameArray.forEach((letter, position) => {
    console.log( letter + ' é a ' + ( position + 1 ) + 'ª letra do meu nome.')
  });

  /* solução feita na correção do Daciuk:

  var name1 = 'Caio'
  for(var i = 0, len = name1.length; i < len; i++) {
    console.log(name1.charAt(i) + ' é a ' + (i + 1) + 'ª letra do meu nome.')
  }

  */

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */

  console.log( '\nNome convertido à partir de um slug:' );
  
  let fullNameSlug = 'caio-cesar-de-souza-santos'  

  function slugToNormal(name) {
    //cria um array com a quebra '-' separando os nomes e depois com map deixa a primeira letra de cada nome maiuscula e com join junta os arrays e forma uma string.
    let newName = name.split('-').map(name => {

      return name.charAt(0).toUpperCase() + name.slice(1)

    }).join(' ')

    return newName
    
  }

  console.log(fullNameSlug)
  console.log(slugToNormal(fullNameSlug)) //Nome corrigido pela função slugToNormal()

  /*forma como o daciuk fez na correção:

  let fullNameSlug = 'caio-cesar-de-souza-santos'
  let newFullName = fullNameSlug.split('-').map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }).join(' ')

  console.log(fullNameSlug)
  console.log(slugToNormal(newFullName))

  */

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */

  console.log( '\nMeus amigos:' );  

  function fraseAmigos(amigosArray) {
    let nomesReduzidos = amigosArray.reduce((acumulado, item, index) => {
      return acumulado + (', ' + item) 
    })

    let indexPenultimoItem = amigosArray.length - 1

    return nomesReduzidos.replace( ', ' + (amigosArray[indexPenultimoItem]), ' e ' + amigosArray[indexPenultimoItem])
                         .concat(' são meus amigos.')
  }

  let friends = ['Caio', 'Gisele', 'Geisa', 'Cassio']   
  console.log(fraseAmigos(friends))

  /* Forma como o daciuk fez na correção:

  let friends = ['Caio', 'Gisele', 'Geisa', 'Cassio']

  var phase = friends.reduce((acumulado, atual, index) => {
    var separador = friends.length - 1 === index ? ' e ' : ', '
    return acumulado + separador + atual
  }).concat(' são meus amigos.')

  console.log(fraseAmigos(phase))
  */

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );

  let nome = 'Roberto'
  console.log(nome.replace(nome, 'Roberta'))

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );

  let outroNome = 'Fernando'

  console.log(outroNome.substring(8, 3))

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  
  let myName = 'CaiO'

  function transformName(name) {
    let arrayName = name.split('')

    arrayName = arrayName.map((letterName, index) => {      
        return ((index % 2) === 0) ? letterName.toUpperCase() : letterName.toLowerCase()    
    })

    return arrayName.reduce((acumulado, item) => {
      return acumulado + item
    })
  }

  console.log(transformName(myName))



})()