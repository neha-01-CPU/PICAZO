const lobbyScreen = document.getElementById('lobby-screen');
const gamePage = document.getElementById('game-page');
const playBtn = document.getElementById('play-btn');
const playerNameInput = document.getElementById('player-name');
const currentAvatar = document.getElementById('current-avatar');
const prevAvatarBtn = document.getElementById('prev-avatar');
const nextAvatarBtn = document.getElementById('next-avatar');

// Hand-picked avatars featuring specific styles (short hair/beards for males, long hair/blush for females)
const avatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&hair=short&facialHair=beardLight", // Male, short hair, beard
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&hair=longButNotTooLong&mouth=smile", // Female, long hair
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo&hair=short&accessories=prescription02", // Male, spectacles
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara&hair=long&mouth=smile" // Female, long hair
];

let currentAvatarIndex = 0;

function updateAvatarImage() {
    currentAvatar.style.opacity = '0.3';
    setTimeout(() => {
        currentAvatar.src = avatars[currentAvatarIndex];
        currentAvatar.style.opacity = '1';
    }, 150);
}

nextAvatarBtn.addEventListener('click', () => {
    currentAvatarIndex++;
    if (currentAvatarIndex >= avatars.length) currentAvatarIndex = 0;
    updateAvatarImage();
});

prevAvatarBtn.addEventListener('click', () => {
    currentAvatarIndex--;
    if (currentAvatarIndex < 0) currentAvatarIndex = avatars.length - 1;
    updateAvatarImage();
});

// The FIX for getting "Stuck"
playBtn.addEventListener('click', () => {
    const name = playerNameInput.value.trim();
    
    if (name === "") {
        alert("Please enter your name first!");
        return; // Stops the code from proceeding if name is empty
    }

    // 1. Hide the lobby completely
    lobbyScreen.style.display = "none";
    
    // 2. Un-hide the game screen
    gamePage.classList.remove('hidden-screen');
    
    console.log("Successfully transitioned to game screen for:", name);
});
