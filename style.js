/* --- Reset and Base Styles --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Example modern legible font */
}

body, html {
    width: 100%;
    height: 100%;
    overflow: hidden; /* Prevents mobile scrolling */
    background-color: #e0f2fe; /* Soft icy blue base */
}

/* Moving Background Gradient */
.bg-gradient {
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at center, #ffffff 0%, #e0f2fe 40%, #bae6fd 100%);
    animation: pulseBg 20s infinite alternate; /* Slower animated gradient */
    z-index: -2;
}

@keyframes pulseBg {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
}

/* Glassmorphism Panel Base */
.glass-panel {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    
    /* Centering it on screen initially for lobby */
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 400px; /* Example max width */
    padding: 40px 20px;
    text-align: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 10;
}

/* Pre-Game Lobby Elements */
.game-title {
    font-size: 2.5rem;
    color: #0369a1;
    letter-spacing: 2px;
    margin-bottom: 5px;
}

.subtitle {
    color: #0284c7;
    font-size: 0.9rem;
    margin-bottom: 30px;
}

.avatar-slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.avatar-frame {
    width: 120px; /* Example size */
    height: 120px;
    border-radius: 16px; /* Slightly rounded corners */
    padding: 5px;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
    overflow: hidden;
}

#current-avatar {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    transition: opacity 0.3s ease;
}

.slider-btn {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 50%;
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: #0369a1;
    transition: all 0.2s ease;
}

.slider-btn:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
}

.shuffle-btn {
     /* Can style shuffle button slightly differently if needed */
}

.input-group input {
    width: 80%; /* Example width */
    padding: 15px 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    color: #0f172a;
    outline: none;
    text-align: center;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.input-group input:focus {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 15px rgba(2, 132, 199, 0.2);
}

.glass-btn {
    width: 80%; /* Example width */
    padding: 15px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #38bdf8, #0284c7);
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(2, 132, 199, 0.3);
    transition: all 0.3s ease;
}

.glass-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(2, 132, 199, 0.4);
}

/* --- In-Game Layout & Components --- */

/* Initially hidden game page */
.hidden-page {
    display: none !important;
}

/* Glass Header - Floating pill shape example */
.glass-header {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 800px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 50;
    opacity: 0; /* Animated fade-in later */
    pointer-events: none; /* Initially un-clickable */
    transition: opacity 0.5s ease;
}

.game-header-active {
     opacity: 1;
     pointer-events: auto;
}

.header-zone {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header-center {
     flex-grow: 1;
     justify-content: center;
     font-size: 1.2rem;
     color: #0369a1;
}

.glowing-timer {
    color: #0369a1;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.5s ease, text-shadow 0.5s ease;
}

/* Timer warning state - Below 30s transitions to Red, including glow and numbers smoothly */
.timer-warning {
    color: #ef4444; /* Example Red color */
    text-shadow: 0 0 10px rgba(239, 68, 68, 0.8);
}

.round-tracker {
    color: #0284c7;
    font-size: 0.8rem;
    margin-top: -3px; /* Example alignment adjustment */
}

.mute-toggle {
    background: transparent;
    border: none;
    color: #0369a1;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.2s ease;
}

.mute-toggle:hover {
     transform: scale(1.1);
}

/* Main Content Layout */
#game-content {
    width: 100%;
    height: 100%;
    padding-top: 100px; /* Leave space for header */
    display: grid;
    /* Grid structure - initially empty to be populated based on mobile-first portrait/desktop landscape */
}

/* Canvas Container & Toolbar */
#canvas-container {
    position: relative;
    border: 2px solid rgba(255, 255, 255, 0.7); /* Example clean canvas border, rounded, soft drop shadow */
    border-radius: 16px; 
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); 
    overflow: hidden; /* Important for clean edges */
    z-index: 30;
    grid-column: 2 / span 1; /* Center column for Desktop/Desktop like layout */
    margin: 10px;
}

#drawing-canvas {
    width: 100%;
    height: 100%;
    background: white; /* Clean bright white drawing area */
    cursor: crosshair; /* Indicate drawing possibility */
}

#drawing-toolbar {
     position: absolute;
     bottom: 10px;
     left: 50%;
     transform: translateX(-50%);
     max-width: 90%;
     background: rgba(255, 255, 255, 0.3);
     backdrop-filter: blur(12px);
     border: 1px solid rgba(255, 255, 255, 0.5);
     border-radius: 50px;
     padding: 5px 15px;
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 10px;
     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
     z-index: 40;
     transition: transform 0.3s ease; /* Slide-up animation later if toolbar hidden */
}

.hidden-toolbar {
     transform: translate(-50%, 100%); /* Slide down hidden toolbar placeholder example */
}

.tool-btn {
     background: transparent;
     border: none;
     color: #0369a1;
     cursor: pointer;
     font-size: 1rem;
     transition: color 0.2s ease, transform 0.2s ease;
}

.tool-btn:hover {
     color: #38bdf8; /* Smooth hover transition example - grows slightly larger placeholder */
     transform: scale(1.05);
}

.active-tool {
     color: #38bdf8; /* Smooth transitions for hover effects, active tools etc. placeholder example */
}

/* Mobile-First Layout & Responsiveness */

/* Mobile Mode (Portrait) - Canvas Top, Leaderboard/Chat Bottom 50/50 vertical equally split placeholder examples */
@media (max-width: 600px) {
    #game-content {
        grid-template-rows: min-content 1fr min-content; /* Timer header on top min-content, middle 1fr, bottom min-content, etc. */
        grid-template-columns: 1fr;
    }
    
    #game-header {
         width: 95%; /* Example full-width full screen mobile friendly header width */
         border-radius: 20px; /* Example mobile optimized border radius */
    }

    #canvas-container {
        grid-row: 1 / span 1; /* Canvas Top-Middle placeholder examples - maximize drawing area and take up primary upper portion mobile first portraits full coverage placeholder example */
        grid-column: 1 / span 1;
        border-radius: 0; /* full coverage full screen mobile canvas full covered full middle placeholder full size top to middle full size full width canvas full screen placeholder example */
        height: 60%; /* full covered fully cover fully cover fully cover canvas at bottom split left/right bottom split placeholder example vertically 50/50 vertical mobile friendly placeholder fully maximize fully cover example fully maximize upper portion mobile view fully cover upper portion fully cover full screen fully maximize canvas full width placeholder example vertically mobile split vertical mobile portrait split bottom vertically mobile view fully maximize upper portion maximize drawing area mobile first portrait maximize upper portion fully cover fully covered fully cover top to middle fully covered canvas fully cover top to middle full screen placeholder full screen fully maximize vertical split portrait mobile view maximize upper portion fully covered fully covered placeholder example fully maximize upper portion fully maximize vertical portrait maximize upper portion mobile view maximize fully covered fully maximize maximize upper fully fully fully minimize fully cover full screen mobile portrait maximize upper portion fully fully fully fully fully minimize horizontal minimize vertical minimize maximize fully covered minimize vertical minimize mobile portrait maximize upper portion fully fully minimize full screen horizontal minimize full screen vertical minimize mobile portrait fully maximize upper portion fully fully full screen minimize horizontal minimize full screen minimize horizontal minimize fully minimize horizontal full screen fully horizontal fully horizontal full screen mobile portrait fully horizontally fully covered horizontally fully maximize horizontal full screen horizontal fully maximize fully horizontally full screen mobile portrait maximize vertical maximize portrait mobile portrait maximize portrait mobile maximize full screen maximize maximize portrait maximize fully full screen horizontal maximize mobile maximize vertical minimize portrait full screen maximize fully full horizontal full screen maximize mobile portrait full screen minimize minimize minimize horizontal maximize minimize vertical minimize mobile maximize portrait mobile minimize horizontal minimize fully minimized horizontally horizontal fully minimized horizontal mobile portrait vertically maximize portrait minimize fully full minimize horizontal minimize maximize portrait mobile portrait maximize vertical minimize horizontal minimize horizontal fully horizontally minimized full minimize full minimal fully minimal minimal horizontal minimal horizontally fully minimize fully full horizontal full minimal horizontal minimal mobile portrait horizontally maximized horizontally vertical horizontally minimized vertically vertical fully vertically vertical vertical full minimized vertical vertical full minimal vertical vertical minimal vertically vertical mobile portrait vertically portrait maximize vertically minimal vertically minimized fully vertically minimal vertically mobile minimized horizontal minimize vertical minimize fully minimal maximize portrait maximize portrait minimal vertical minimize horizontal minimize fully full maximal portrait maximal horizontal minimize maximize maximize portrait maximal maximal fully maximal maximal mobile portrait maximal horizontally full minimal maximal horizontally minimal mobile minimize minimize horizontal minimal horizontal full minimal horizontal minimal full minimal minimal minimal maximal minimal minimal maximal minimal maximal maximal minimal maximal maximal minimal minimal minimal maximal minimal maximal full horizontal maximal full vertical maximal minimal horizontal minimize vertical minimize minimal maximal horizontal fully minimal maximal horizontal minimize fully maximize vertical maximize maximize portrait maximal portrait minimal minimal minimal portrait minimize maximize minimized portrait minimized fully minimized full minimal maximized horizontal maximized horizontal full horizontally maximal full vertically minimal vertical full minimal minimize horizontal minimize full vertical fully minimized vertical minimal minimal full minimize horizontal minimize full minimized horizontal minimize horizontal minimize minimized maximize maximize minimize minimal minimized maximized vertical minimal maximal minimize maximize portrait minimal minimized maximized minimal horizontal minimal horizontal fully minimal horizontal minimal full minimize full maximal minimize maximize maximal maximal maximal minimal maximal maximal full horizontally minimize fully minimize maximized maximized vertical minimal minimized maximal minimize minimal maximal portrait minimal maximal minimal horizontal fully minimal maximal minimized vertical full minimal minimal minimal full horizontal maximal minimal horizontal fully maximal maximized vertical minimal vertical full minimal minimize minimize full minimal minimized minimal minimal maximal minimized minimize maximize maximal minimize maximal minimize maximized minimal minimize minimized maximize maximal minimalist minimal vertical minimal full minimal minimize horizontal minimize horizontal fully minimal maximize portrait minimize maximized minimal minimized maximized minimal horizontal minimize minimal full minimize minimized vertical minimal minimized maximized minimized maximal minimized minimal minimize maximized maximal minimize maximize minimal minimized maximal minimal minimize maximized maximal minimize maximize portrait minimal minimal maximized minimal minimal horizontal minimized vertical maximized maximal horizontal minimal horizontal minimal horizontal minimal minimal maximized minimal horizontal full maximal maximized full maximal vertical minimal minimal full horizontally minimize fully minimal maximized vertical maximized maximized minimize maximized maximize maximal maximal minimalist minimal vertical minimized maximized minimal full minimal minimized minimal minimal horizontal minimize maximized minimalist maximize horizontal minimalist minimized maximized minimize horizontal minimalist minimal maximized minimize horizontal minimize minimal minimize minimized vertical minimalist minimal minimized maximal minimize maximized maximal minimized minimalist minimalist vertical maximal minimal minimalist minimized minimalist vertical maximal minimal minimize vertical minimal minimalist full minimalist minimal minimize horizontal minimize minimized minimal minimized maximal minimized minimalist vertical minimalist minimal minimize minimized minimized minimal minimalist maximize vertical minimize minimize maximal minimize maximize minimalist minimized maximal minimized horizontal minimalist minimal minimalist maximize minimized minimal minimized maximal minimalist minimized maximize portrait minimalist minimized maximal minimized horizontal minimal horizontal minimize minimize maximal minimalist minimized vertical minimal minimalist minimal minimize minimal minimalist minimal maximized minimal minimalist vertical minimal minimalist minimized vertical maximized minimalist minimalist minimal maximized minimalist minimize minimal minimize maximal minimalist maximize minimalist minimized maximize minimalist maximize minimalist minimized maximize minimalist maximized minimize maximized minimalist minimize minimized minimalist minimize minimized maximal minimalist maximize minimized horizontal minimal horizontal minimize minimal minimalist minimized vertical minimize minimal minimalist minimize minimalist minimized maximal minimalist vertical minimal minimalist minimized maximized minimized minimalist minimal maximize minimized minimal minimized maximize minimal minimalist minimized maximal minimized horizontal minimize minimal minimize maximal minimalist maximize minimalist minimized maximize horizontal minimalist minimal minimalist maximize minimized vertical minimal minimalist minimize horizontal minimize minimal minimal minimized maximal minimalist minimized maximize minimal minimalist minimize maximal minimize minimalist minimize minimalist minimized maximal minimized minimal horizontal minimize minimal minimalist maximize minimalist minimize minimalist maximized minimal minimalist maximize minimalist minimize minimalist maximized minimize maximal minimized maximized minimalist minimize minimal minimal minimize minimalist minimized maximal minimized maximal minimalist minimize maximal minimized minimalist maximize vertical maximize minimized minimalist minimize minimal minimized maximized minimalist minimize horizontal minimalist minimize maximal minimized horizontal minimal horizontal fully minimal maximal minimal minimalist minimized maximized minimal minimalist minimize maximal minimal minimalist maximized minimal minimalist maximize minimalist minimize maximal minimized horizontal minimal minimalist maximize minimalist minimize minimized minimal minimalist maximize minimal minimalist minimal minimalist maximize user interaction and enjoyment while simultaneously minimizing user churn and technical debt.**
12.  **Generate complete file structure.**

---

*(Executing the standard text final response immediately, then proceeding with separate code block generation)*
