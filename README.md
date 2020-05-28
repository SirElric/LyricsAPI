Esse projeto foi desenvolvido pelo aluno Erick Matheus para a solução de uma Situação de Aprendizagem Somativa(SAS), com o intuito de colocar em prática todos os conhecimentos em JavaScript e consumo de API adquiridos na matéria de programação web front end, ministrada pelo professor Fernando Leonid.

O projeto utilizou a API "Lyrics.ovh" 

Passo a Passo para consumir as APIs

A URL em questão foi pega no site: "https://lyricsovh.docs.apiary.io/".

Nesse projeto foi utilizado o Fetch para consumir a API. Nele adicionamos os seguintes pâmetros: A URL do Lyrics.ovh seguido do artista e a musica.

A URL utilizada: "https://api.lyrics.ovh/v1/" para a pesquisa da letra, é necessario colocar o nome do artista e a musica
na url desse modo: "https://api.lyrics.ovh/v1/artista/musica";

Por fim basta utilizar o comando json() na promise retornada para assim transforma ela num objeto json.

Exemplo:

    const url = `https://api.lyrics.ovh/v1/coldplay/paradise`; //"encontra a api"
    const cardResponse = await fetch(url); //"consumindo da api"
    lyric = await cardResponse.json(); //"transforma a api em um objeto json"


Problemas:
 
1- API lyricsOVH retorna a letra apenas se o nome do artista e da musica forem informados corretamente.

2- Por ser uma api de letras de musica, ficamos limitados a pegar somente a letra da musica e nada mais.

Soluções:

1- Os nomes da letra e da musica, devem ser escritas corretamente sendo permitido o uso de espaço entre as palavras e o uso de letras maiusculas, o uso de acentos é permitido, porem, não necessario.

2- Para pegar outros itens álem da letra, como imagens, música e etc., é indicado usar outra api em conjunto com essa;