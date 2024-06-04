const dataUrl = 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json';

document.addEventListener('DOMContentLoaded', () => {
    fetch(dataUrl)
        .then(response => response.json())
        .then(data => displayVideos(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayVideos(videos) {
    const videoGrid = document.getElementById('video-grid');
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-thumbnail');
        videoElement.innerHTML = `
            <a href="../pages/videoespages.html?id=${video.id}">
                <img src="${video.thumbnailUrl}" alt="${video.title}">
                <h3>${video.title}</h3>
                <p>${video.author}</p>
            </a>
        `;
        videoGrid.appendChild(videoElement);
    });
}

