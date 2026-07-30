// ======================================
// AMBIL ELEMEN
// ======================================

const cover = document.getElementById("cover");
const isiUndangan = document.getElementById("isiUndangan");
const musik = document.getElementById("musik");
const musicButton = document.getElementById("musicButton");


// ======================================
// BUKA UNDANGAN
// ======================================

function bukaUndangan(){

    cover.classList.add("hide");

    isiUndangan.style.display = "block";

    document.body.style.overflowY = "auto";

    musik.play().catch(()=>{});

}


// ======================================
// PLAY / PAUSE MUSIK
// ======================================

function playPauseMusic(){

    if(musik.paused){

        musik.play();

        musicButton.innerHTML = "🎵";

    }else{

        musik.pause();

        musicButton.innerHTML = "🔇";

    }

}


// ======================================
// ANIMASI SCROLL
// ======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.25
});

sections.forEach((section)=>{

    observer.observe(section);

});


// ======================================
// NAMA TAMU DARI LINK
// contoh:
// ?to=Adinda%20Zahra
// ======================================

const urlParams = new URLSearchParams(window.location.search);

const nama = urlParams.get("to");

const namaTamu = document.getElementById("namaTamu");

if(nama){

    namaTamu.textContent = decodeURIComponent(nama);

}else{

    namaTamu.textContent = "Tamu Undangan";

}


// ======================================
// PLAY OTOMATIS SAAT USER KLIK DIMANA SAJA
// ======================================

document.addEventListener("click",()=>{

    if(musik.paused){

        musik.play().catch(()=>{});

    }

},{ once:true });