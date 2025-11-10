// Content Creators Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);
    
    // Update theme toggle icon
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
    
    // Search Toggle Functionality
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    
    searchToggle.addEventListener('click', function() {
        searchBox.classList.toggle('active');
        searchToggle.classList.toggle('active');
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchToggle.contains(e.target) && !searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
            searchToggle.classList.remove('active');
        }
    });
    
    // Creator Switch Functionality
    const creatorSwitchBtns = document.querySelectorAll('.creator-switch-btn');
    const creatorProfiles = document.querySelectorAll('.creator-profile');
    const prevBtn = document.getElementById('prevCreator');
    const nextBtn = document.getElementById('nextCreator');
    
    let currentCreatorIndex = 0;
    
    // Switch creator function
    function switchCreator(index) {
        // Remove active class from all buttons and profiles
        creatorSwitchBtns.forEach(btn => btn.classList.remove('active'));
        creatorProfiles.forEach(profile => profile.classList.remove('active'));
        
        // Add active class to current button and profile
        creatorSwitchBtns[index].classList.add('active');
        creatorProfiles[index].classList.add('active');
        
        // Update anime suggestions based on creator
        updateAnimeSuggestions(index);
        
        // Update YouTube videos based on creator
        updateYouTubeVideos(index);
        
        currentCreatorIndex = index;
    }
    
    // Update anime suggestions for each creator
    function updateAnimeSuggestions(creatorIndex) {
        const animeGrid = document.querySelector('.anime-grid');
        if (!animeGrid) return;
        
        let animeHTML = '';
        
        if (creatorIndex === 0) { // TADB
            animeHTML = `
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/1555/image/6fd1935085eec0022d2c9121716374d4.webp/large.jpg" alt="Demon Slayer" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Demon Slayer - Season 1</h3>
                        <p class="anime-platform">Anime-times</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.7 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">26 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Adventure</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/14038/image/a1eceb04646ccd4d25c747fe7e85b302.webp/large.jpg" alt="Death Note" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Death Note</h3>
                        <p class="anime-platform">Anime-times</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>9.0 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">37 Episodes</span>
                            <span class="anime-genre-tag">Mystery</span>
                            <span class="anime-genre-tag">Thriller</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/10337/image/a4be70dfa4ae919f0c2470e1bbffb0b8.webp/large.jpg" alt="DanDaDan" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">DanDaDan</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.3 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">24 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Comedy</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime/visual/6875/image/00524cc5d2d7dd8506da05bd4d10d38e.jfif/large.jpg" alt="Spy x Family" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">SPY x FAMILY</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.8 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">25 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Comedy</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/3631/image/465d1f01d81532ff5d9c6947d0b28613.png/large.jpg" alt="Haikyu!!" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Haikyu!!</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.9 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">25 Episodes</span>
                            <span class="anime-genre-tag">Sports</span>
                            <span class="anime-genre-tag">Drama</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://image.tmdb.org/t/p/original/wmrk6mLWDjz3jb210y3QisXUAcr.jpg" alt="Dragon Ball Daima" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Dragon Ball Daima</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.6 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">153 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Adventure</span>
                        </div>
                    </div>
                </div>
            `;
        } else if (creatorIndex === 1) { // Telchi Anime
            animeHTML = `
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/10337/image/a4be70dfa4ae919f0c2470e1bbffb0b8.webp/large.jpg" alt="DanDaDan" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">DanDaDan</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.3 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">24 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Comedy</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime/visual/6884/image/7963459087c881bb8db7eb20830a4ef8.png/large.jpg" alt="Black Butler" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Black Butler Public School</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.2 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">36 Episodes</span>
                            <span class="anime-genre-tag">Mystery</span>
                            <span class="anime-genre-tag">Supernatural</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime/visual/6875/image/00524cc5d2d7dd8506da05bd4d10d38e.jfif/large.jpg" alt="Spy x Family" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">SPY x FAMILY</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.8 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">25 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Comedy</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/14169/image/1c76fdcf1cdd76892b407e54f7fdb542.webp/large.jpg" alt="Gachiakuta" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Gachiakuta</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.1 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">12 Episodes</span>
                            <span class="anime-genre-tag">Adventure</span>
                            <span class="anime-genre-tag">Comedy</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/2981/image/80070608f5d264e77b0bb4f1fe24096b.webp/large.jpg" alt="Vinland Saga" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Vinland Saga</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.9 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">24 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Historical</span>
                        </div>
                    </div>
                </div>
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://u.livechart.me/anime_visuals/local_version/213/image/da11f281fa013322c52cf32ae7663437.jpeg/large.jpg" alt="Ranking of Kings" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">Ranking of Kings</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.7 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">23 Episodes</span>
                            <span class="anime-genre-tag">Fantasy</span>
                            <span class="anime-genre-tag">Adventure</span>
                        </div>
                    </div>
                </div>
            `;
        } else if (creatorIndex === 2) { // Professor
            animeHTML = `
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://wallpaperaccess.com/full/9970042.jpg" alt="One Piece" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">ONE PIECE</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>9.1 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">Ongoing</span>
                            <span class="anime-genre-tag">Adventure</span>
                            <span class="anime-genre-tag">Action</span>
                        </div>
                    </div>
                </div>
            `;
        } else if (creatorIndex === 3) { // Rae
            animeHTML = `
                <div class="anime-card-box">
                    <div class="anime-image-left">
                        <img src="https://wallpaperaccess.com/full/9929920.jpg" alt="Naruto" class="anime-poster">
                    </div>
                    <div class="anime-details-right">
                        <h3 class="anime-name">NARUTO</h3>
                        <p class="anime-platform">Crunchyroll</p>
                        <div class="anime-meta">
                            <div class="anime-rating-box">
                                <i class="fas fa-star"></i>
                                <span>8.7 (IMDb)</span>
                            </div>
                            <span class="anime-episodes">220 Episodes</span>
                            <span class="anime-genre-tag">Action</span>
                            <span class="anime-genre-tag">Adventure</span>
                        </div>
                    </div>
                </div>
            `;
        }
        
        animeGrid.innerHTML = animeHTML;
    }
    
    // Update YouTube videos for each creator
    function updateYouTubeVideos(creatorIndex) {
        const videosGrid = document.querySelector('.videos-grid');
        if (!videosGrid) return;
        
        let videosHTML = '';
        
        if (creatorIndex === 0) { // TADB
            videosHTML = `
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">10:25</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Latest Telugu Anime Updates</h3>
                        <p class="video-channel">TADB Team</p>
                        <p class="video-views">1.2K views • 2 days ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">15:30</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Telugu Anime Database Overview</h3>
                        <p class="video-channel">TADB Team</p>
                        <p class="video-views">2.5K views • 5 days ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">8:45</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Best Telugu Dubbed Anime 2024</h3>
                        <p class="video-channel">TADB Team</p>
                        <p class="video-views">890 views • 1 week ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">12:15</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Anime Review: Naruto Telugu Dub</h3>
                        <p class="video-channel">TADB Team</p>
                        <p class="video-views">3.1K views • 3 days ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">20:10</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Telugu Anime Community Updates</h3>
                        <p class="video-channel">TADB Team</p>
                        <p class="video-views">1.8K views • 1 week ago</p>
                    </div>
                </div>
            `;
        } else if (creatorIndex === 1) { // Telchi Anime
            videosHTML = `
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">14:20</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">DanDaDan Telugu Review</h3>
                        <p class="video-channel">Telchi Anime</p>
                        <p class="video-views">2.8K views • 1 day ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">18:45</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Top 10 Anime Recommendations</h3>
                        <p class="video-channel">Telchi Anime</p>
                        <p class="video-views">4.2K views • 3 days ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">11:30</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Spy x Family Season 2 Review</h3>
                        <p class="video-channel">Telchi Anime</p>
                        <p class="video-views">3.5K views • 5 days ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">16:15</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Black Butler Analysis</h3>
                        <p class="video-channel">Telchi Anime</p>
                        <p class="video-views">2.1K views • 1 week ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">13:40</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Anime News Weekly Update</h3>
                        <p class="video-channel">Telchi Anime</p>
                        <p class="video-views">1.9K views • 2 weeks ago</p>
                    </div>
                </div>
            `;
        } else if (creatorIndex === 2) { // Professor
            videosHTML = `
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">25:30</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">One Piece Editing Masterclass</h3>
                        <p class="video-channel">Professor</p>
                        <p class="video-views">1.5K views • 4 days ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">19:45</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Anime Editing Techniques</h3>
                        <p class="video-channel">Professor</p>
                        <p class="video-views">980 views • 1 week ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">22:10</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Behind the Scenes: TADB Production</h3>
                        <p class="video-channel">Professor</p>
                        <p class="video-views">1.2K views • 2 weeks ago</p>
                    </div>
                </div>
            `;
        } else if (creatorIndex === 3) { // Rae
            videosHTML = `
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">17:25</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Naruto: Why It's Still Relevant</h3>
                        <p class="video-channel">Rae</p>
                        <p class="video-views">2.3K views • 3 days ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">21:15</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Best Anime for Beginners</h3>
                        <p class="video-channel">Rae</p>
                        <p class="video-views">3.7K views • 1 week ago</p>
                    </div>
                </div>
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                        <div class="video-duration">15:50</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Anime Recommendation Algorithm</h3>
                        <p class="video-channel">Rae</p>
                        <p class="video-views">1.8K views • 2 weeks ago</p>
                    </div>
                </div>
            `;
        }
        
        videosGrid.innerHTML = videosHTML;
    }
    
    // Button click handlers
    creatorSwitchBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => switchCreator(index));
    });
    
    // Navigation arrows
    prevBtn.addEventListener('click', function() {
        currentCreatorIndex = currentCreatorIndex > 0 ? currentCreatorIndex - 1 : creatorSwitchBtns.length - 1;
        switchCreator(currentCreatorIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentCreatorIndex = currentCreatorIndex < creatorSwitchBtns.length - 1 ? currentCreatorIndex + 1 : 0;
        switchCreator(currentCreatorIndex);
    });
    
    // Auto-switch creators every 20 seconds (optional)
    setInterval(() => {
        nextBtn.click();
    }, 20000);
    
    // YouTube API Integration (Placeholder)
    // In a real implementation, you would use YouTube Data API v3
    function loadYouTubeVideos() {
        // This is a placeholder function
        // You would implement actual YouTube API calls here
        console.log('Loading YouTube videos...');
        
        // Example of how you might structure the API call:
        /*
        const API_KEY = 'YOUR_YOUTUBE_API_KEY';
        const CHANNEL_IDS = {
            'creator-1': 'UC_CHANNEL_ID_1',
            'creator-2': 'UC_CHANNEL_ID_2',
            'creator-3': 'UC_CHANNEL_ID_3'
        };
        
        async function fetchVideos(channelId) {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`
            );
            const data = await response.json();
            return data.items;
        }
        */
    }
    
    // Initialize YouTube videos loading
    loadYouTubeVideos();
    
    // Initialize with TADB suggestions and videos (index 0)
    updateAnimeSuggestions(0);
    updateYouTubeVideos(0);
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.anime-card, .video-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Utility function to format video duration
function formatDuration(duration) {
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');
    
    if (hours) {
        return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    } else {
        return `${minutes}:${seconds.padStart(2, '0')}`;
    }
}

// Utility function to format view count
function formatViewCount(count) {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    } else {
        return count.toString();
    }
}

// Utility function to format time ago
function timeAgo(date) {
    const now = new Date();
    const diffTime = Math.abs(now - new Date(date));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
        return '1 day ago';
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return months === 1 ? '1 month ago' : `${months} months ago`;
    } else {
        const years = Math.floor(diffDays / 365);
        return years === 1 ? '1 year ago' : `${years} years ago`;
    }
}