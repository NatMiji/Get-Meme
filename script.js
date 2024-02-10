document.getElementById('getMemeBtn').addEventListener('click', getMeme);

function getMeme() {
    // Fetch meme data from the Meme Generator API
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            // Get a random meme from the API response
            const memes = data.data.memes;
            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];

            // Display the meme image
            displayMeme(randomMeme.url);
        })
        .catch(error => {
            console.error('Error fetching meme:', error);
        });
}

function displayMeme(memeUrl) {
    // Display the meme image in the memeContainer
    const memeImage = document.getElementById('memeImage');
    memeImage.src = memeUrl;
}
