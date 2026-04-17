// --- Avatar Slider Logic ---
// We are using Pravatar placeholders to simulate the high-res realistic avatars
const avatarList = [
    "https://i.pravatar.cc/250?img=11", // Male, short hair
    "https://i.pravatar.cc/250?img=5",  // Female, long hair
    "https://i.pravatar.cc/250?img=13", // Male, beard/glasses
    "https://i.pravatar.cc/250?img=9",  // Female, stylish
    "https://i.pravatar.cc/250?img=12", // Male
    "https://i.pravatar.cc/250?img=20"  // Female
];

let currentIndex = 0;
const avatarImage = document.getElementById('current-avatar');
const btnPrev = document.getElementById('prev-avatar');
const btnNext = document.getElementById('next-avatar');
const joinBtn = document.getElementById('join-btn');
const playerNameInput = document.getElementById('player-name');
const lobbyScreen = document.getElementById('lobby-screen');

// Function to update the image with a tiny fade effect
function updateAvatar() {
    avatarImage.style.opacity = '0.5';
    setTimeout(() => {
        avatarImage.src = avatarList[currentIndex];
        avatarImage.style.opacity = '1';
    }, 150); // wait 150ms for smooth transition
}

// Right Arrow Click
btnNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= avatarList.length) {
        currentIndex = 0; // Loop back to start
    }
    updateAvatar();
});

// Left Arrow Click
btnPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = avatarList.length - 1; // Loop back to end
    }
    updateAvatar();
});

// --- Join Game Animation ---
joinBtn.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    
    if (playerName === "") {
        alert("Please enter a name to play!");
        return;
    }

    // Trigger the cool zoom-and-fade animation we put in the Master Prompt
    lobbyScreen.classList.add('zoom-out-fade');
    
    // Here is where we will eventually load the Main Game Canvas!
    setTimeout(() => {
        console.log(`Joining game as ${playerName} with avatar ${avatarList[currentIndex]}`);
        // For now, let's just change the background to show it worked
        document.body.style.backgroundColor = "#0f172a"; 
    }, 500); 
});
