function playTomato(fileName, actionClass) {
    const wrapper = document.getElementById("tomatoCharacter");
    const audio = document.getElementById("tomatoAudio");

    // Stop current audio and clear classes
    audio.pause();
    audio.currentTime = 0;
    
    // Reset wrapper to base state
    wrapper.className = "tomato-wrapper";

    // Set new source
    audio.src = fileName;

    audio.onplay = () => {
        wrapper.classList.add("talking");
        wrapper.classList.add(actionClass);
    };

    audio.onended = () => {
        wrapper.classList.remove("talking");
        wrapper.classList.remove(actionClass);
    };

    audio.play().catch(err => {
        console.error("Playback error:", err);
    });
}