// Pertanyaan awal
function showMessage() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="letter-content fade-in">
            <p>Aku cuma mau bilang sesuatu yang penting banget... 😳</p>
            <div class="buttons">
                <button class="glow-btn" onclick="showBoyfriendQuestion()">Iya, terusin</button>
                <button class="glow-btn" onclick="moveButton('engga')">Enggak 😢</button>
            </div>
        </div>
    `;
}

// Pertanyaan "Do you want to be my boyfriend?"
function showBoyfriendQuestion() {
    createLove();
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="letter-content fade-in">
            <p>Do you want to be my <span class="gradient-text">boyfriend</span>?</p>
            <div class="buttons">
                <button class="glow-btn" onclick="showThankYouLetter()">Yes</button>
                <button class="glow-btn" onclick="moveButton('mikir')">No</button>
            </div>
        </div>
    `;
}

// Pop up surat makasih, lalu tombol WA
function showThankYouLetter() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="mini-letter popupIn">
            <p style="margin:0 0 20px 0;">
                Terima kasih ya, karena sudah menerima aku jadi pendamping kamu.<br><br>
                Rasanya sulit diungkapkan dengan kata-kata betapa bersyukurnya aku bisa berada di sisimu.<br><br>
                Terima kasih karena telah membuka hatimu untukku, menerima semua kelebihanku, kekuranganku, bahkan sisi-sisi dari diriku yang belum tentu mudah dimengerti.<br><br>
                Aku tahu perjalanan ini nggak selalu mulus, tapi aku bahagia bisa melaluinya bersamamu.<br><br>
                Kamu adalah anugerah yang nggak pernah aku duga tapi sangat aku syukuri.<br><br>
                Aku janji, selama aku masih diberi waktu dan kesempatan, aku bakal terus berusaha jadi yang terbaik untuk kamu, nemenin kamu di setiap langkah, jadi bahumu saat kamu lelah, dan jadi rumah yang selalu kamu bisa pulangin.<br><br>
                Sekali lagi, makasih ya... udah memilih aku, mempercayakan hatimu ke aku, dan mau sama-sama jalanin cerita ini bareng-bareng.
            </p>
            <a 
                href="https://wa.me/6285117162287?text=Iya%20aku%20terima!" 
                class="glow-btn" 
                target="_blank" 
                style="margin-top:18px;display:inline-block;"
            >
                Kirim WA Sekarang!
            </a>
        </div>
    `;
}

// Fungsi kembali ke pesan awal
function backToMessage() {
    showMessage();
}

// Pertanyaan "Yakin nih?"
function showFinalQuestion(answer) {
    const letter = document.getElementById("letter");
    let text = "";
    if (answer === "yes") {
        text = "Yakin nih mau jadi pacarku? Nanti aku sayang banget lho~ 💞";
        letter.innerHTML = `
            <div class="letter-content fade-in">
                <p>${text}</p>
                <div class="buttons">
                    <a href="https://wa.me/6285117162287?text=${encodeURIComponent("Aku mau jadi pacarmu!")} " class="glow-btn" target="_blank">Kirim WA Sekarang!</a>
                </div>
            </div>
        `;
    }
}

// Tombol "enggak" yang ngeselin
function moveButton(type) {
    let pesan = "";
    if (type === "mikir") {
        pesan = "🧐 Gak papa, dipikirin dulu yaa~ Aku tunggu jawabannya!";
    } else {
        pesan = "😭 Yakin nggak mau? Suratnya tetep buat kamu kok!";
    }
    const letter = document.getElementById("letter");
    letter.innerHTML += `
        <div class="mini-letter">
            <p style="margin:0 0 16px 0;">${pesan}</p>
            <button class="glow-btn" style="margin-top:8px;" onclick="backToMessage()">Back</button>
        </div>
    `;
    setTimeout(() => {
        const mini = document.querySelector('.mini-letter');
        if (mini) mini.remove();
    }, 2500);
}

// Love-love terbang
function createLove() {
    const loveBg = document.querySelector('.love-bg');
    const love = document.createElement('div');
    love.className = 'love-float';
    love.innerText = ['❤️','💖','💕','💗','💘','💝'][Math.floor(Math.random()*6)];
    love.style.left = Math.random() * 80 + 10 + '%';
    love.style.fontSize = (Math.random() * 24 + 24) + 'px';
    love.style.animationDuration = (Math.random() * 1.5 + 2.5) + 's';
    loveBg.appendChild(love);
    setTimeout(() => love.remove(), 4000);
}

setInterval(createLove, 400);

// Play audio saat halaman di-load (jika diizinkan)
window.onload = function() {
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.volume = 0.7;
        audio.play().catch(() => {
            // Jika autoplay diblokir, play saat klik pertama user
            document.body.addEventListener('click', function playAudioOnce() {
                audio.play();
                document.body.removeEventListener('click', playAudioOnce);
            });
        });
    }
    if (typeof showMessage === "function") showMessage();
};



