
const button = document.getElementById("btnConfirm")
const box = document.getElementById("info");

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

function erro () {
    box.innerHTML=`
        <h1 class='erro'>Musica ou Artista não especificado</h1>
        <h2 class='erro'>artist or song undefined</h2>
    `;
}

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

button.addEventListener("click", getLyric);

