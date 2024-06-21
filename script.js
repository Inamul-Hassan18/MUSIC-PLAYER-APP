
    const musicPlayer = document.getElementById('musicPlayer');
    let isPlaying = false;

    // Function to play the selected song
    function playSong(songPath) {
        musicPlayer.src = songPath;
        musicPlayer.play();
        isPlaying = true;
        updateButtonLabel();
    }

    // Function to toggle play/pause
    function togglePlayPause() {
        if (isPlaying) {
            musicPlayer.pause();
        } else {
            musicPlayer.play();
        }
        isPlaying = !isPlaying;
        updateButtonLabel();
    }

    // Function to update button label based on play/pause state
    function updateButtonLabel() {
        const playPauseButton = document.querySelector('button[onclick="togglePlayPause()"]');
        playPauseButton.textContent = isPlaying ? 'Pause' : 'Play';
    }



    // libraries
    const songsByLibrary = {
        romantic: [
            { title: 'Romantic Song 1', path: 'path_to_romantic_song1.mp3' },
            { title: 'Romantic Song 2', path: 'path_to_romantic_song2.mp3' },
            // Add more romantic songs
        ],
        heartBreak: [
            { title: 'maine royaan', path: 'songs/11.mp3' },
            { title: 'Friendship Song 2', path: 'path_to_friendship_song2.mp3' },
            // Add more friendship songs
        ],
        // Add more library categories and their songs
    };

    // Function to display songs associated with a specific library
    function showSongs(library) {
        const songsContainer = document.getElementById('songlist');
        songsContainer.innerHTML = ''; // Clear previous songs

        const songs = songsByLibrary[library];
        if (songs) {
            songs.forEach(song => {
                const btn = document.createElement('div');
                btn.className = 'btn';
                btn.textContent = song.title;
                btn.onclick = function() {
                    playSong(song.path);
                };
                songsContainer.appendChild(btn);
            });
        } else {
            songsContainer.textContent = 'No songs available for this library.';
        }
    }