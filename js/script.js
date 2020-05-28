"use restrict"

const button = document.getElementById("btnConfirm");
const box = document.getElementById("info");

// Essa função busca a letra e faz uma validação de caixa vazia;
async function getLyric(event){

    const song = document.getElementById("songName").value;
    const artist = document.getElementById("artistName").value;
    var lyric = null;

    if (artist.length && song.length !== 0){
        const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        const cardResponse = await fetch(url);
        lyric = await cardResponse.json();
        console.log(url);
        console.log(lyric);

        showLyrics(song, artist, lyric);  
    }else{  
        console.log("artist or song undefined");
        erro();  
    }
}

// Essa função mostra o motivo de erro na tela de maneira simple para o usuario;
function erro () {
    box.innerHTML=`
        <h1 class='erro'>Musica ou Artista não especificado</h1>
        <h2 class='erro'>artist or song undefined</h2>
    `;
}

// Essa função serve para mostrar a letra da musica na tela;
function showLyrics(song, artist, lyric){
    box.innerHTML=`
        <div class='titleSong'>
            <h1>${song} - ${artist}</h1>
        </div>
        <div class='lyrics'>
            ${lyric.lyrics}
        </div>
    `;
    if (lyric.lyrics !== undefined){
        document.querySelector(".lyrics").innerText = lyric.lyrics;
    }else{
        document.querySelector(".lyrics").innerText = "Letra da musica não encontrada...";
    }
}

// inicia a busca pela letra ao evento de "click";
button.addEventListener("click", getLyric);

