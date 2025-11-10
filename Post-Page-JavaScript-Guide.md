# Post Page JavaScript Complete Guide

## 🎯 Overview

Post page JavaScript system handles movie/anime details display, cast & crew management, trailers, search functionality, and theme management. This guide covers everything you need to know.

## 📁 File Structure

```
├── post.html                 # Main post page
├── post-script.js           # Main JavaScript file
├── post-styles.css          # Styling
├── theme-manager.js         # Theme system
├── voice-artist-sync.js     # Artist sync system
└── telugu-fonts.css         # Telugu font support
```

## 🗂️ Main Data Structure

### detailedMovieData Object

```javascript
const detailedMovieData = {
    1: {  // Movie ID (unique number)
        id: 1,
        title: "Movie Title",
        year: "2024",
        season: "Winter",
        rating: "8.5",
        ageRating: "PG-13",
        duration: "24 min",
        totalEpisodes: "12",
        viewCount: "4.2M",
        
        // Images
        poster: "https://poster-url.jpg",
        backdrop: "https://backdrop-url.jpg",
        
        // Basic Info
        genres: "Action, Adventure, Drama",
        synopsis: "Movie description in Telugu or English...",
        studio: "Studio Name",
        format: "Season 01", // or "Feature Film"
        premiereDate: "Released on 2024",
        status: "Completed", // or "Ongoing", "Upcoming"
        broadcast: "OTT (Crunchyroll)",
        language: "Telugu Dub Available",
        
        // Statistics
        statistics: {
            rating: "8.5",
            likedPercentage: "85%",
            totalViews: "4.2M"
        },
        
        // Cast (Voice Actors)
        cast: [
            {
                actorName: "Voice Artist Name",
                characterName: "Character Name",
                actorImage: "https://actor-image.jpg",
                characterImage: "https://character-image.jpg"
            }
        ],
        
        // Crew (Production Team)
        crew: [
            {
                name: "Crew Member Name",
                role: "Script Writer", // Director, Sound Engineer, etc.
                avatar: "https://crew-avatar.jpg",
                projectImage: "https://project-image.jpg"
            }
        ],
        
        // Dubbing Studios
        dubbingStudios: [
            {
                name: "Studio Name",
                role: "Dubbing Studio",
                avatar: "https://studio-logo.jpg",
                projectImage: "https://project-image.jpg"
            }
        ],
        
        // Streaming Platforms
        platforms: [
            {
                name: "Crunchyroll",
                status: "Available",
                icon: "https://platform-icon.jpg"
            }
        ],
        
        // Trailers
        trailers: [
            {
                title: "Official Trailer",
                description: "Movie Telugu Trailer",
                thumbnail: "https://thumbnail.jpg",
                videoId: "YouTube_Video_ID"
            }
        ],
        
        // Poster Credit Visibility
        mrp: "Visible" // or "None"
    }
};
```

## 🔧 Core Functions

### 1. Page Initialization

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const movieId = getMovieIdFromURL() || '1';
    loadMovieData(movieId);
    setupEventListeners();
    initializeTheme();
    
    // Initialize Telugu fonts after content loads
    setTimeout(() => {
        teluguFontManager = new TeluguFontManager();
        teluguFontManager.updateContentWithTelugu();
    }, 500);
});
```

### 2. Movie Data Loading

```javascript
function loadMovieData(movieId) {
    // Get movie data or use default
    currentMovie = detailedMovieData[movieId] || { ...defaultMovieData, id: movieId };
    
    // Set backdrop image
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const backdropUrl = currentMovie.backdrop || defaultMovieData.backdrop;
        heroSection.style.setProperty('--backdrop-image', `url('${backdropUrl}')`);
    }
    
    // Load all content sections
    loadBasicInfo();
    loadDetails();
    loadCast();
    loadCrew();
    loadDubbingStudios();
    loadPlatforms();
    loadTrailers();
    updatePosterCredit();
}
```

### 3. Content Loading Functions

#### Basic Information
```javascript
function loadBasicInfo() {
    moviePoster.src = currentMovie.poster;
    movieTitle.textContent = currentMovie.title;
    heroGenres.textContent = currentMovie.genres;
    ageRating.textContent = currentMovie.ageRating;
    releaseYear.textContent = currentMovie.year;
    imdbRating.innerHTML = `<i class="fas fa-star"></i> ${currentMovie.rating}`;
    duration.innerHTML = `<i class="fas fa-clock"></i> ${currentMovie.duration}`;
    
    // Set content type badge
    contentTypeBadge.textContent = currentMovie.format === 'Feature Film' ? 'MOVIE' : 'SERIES';
    
    // Set description with read more
    const shortDescription = currentMovie.synopsis.substring(0, 200) + '...';
    heroDescription.innerHTML = `${shortDescription} <span class="read-more">read more</span>`;
}
```

#### Cast Loading
```javascript
function loadCast() {
    if (!castList) return;
    
    castList.innerHTML = '';
    if (currentMovie.cast && currentMovie.cast.length > 0) {
        currentMovie.cast.forEach(member => {
            const castElement = createCastElement(member);
            castList.appendChild(castElement);
        });
    } else {
        castList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Cast information not available</p>';
    }
}

function createCastElement(member) {
    const castDiv = document.createElement('div');
    castDiv.className = 'cast-member';
    
    castDiv.innerHTML = `
        <div class="cast-left">
            <img src="${member.actorImage}" alt="${member.actorName}" class="cast-avatar">
            <div class="cast-info">
                <div class="cast-name">${member.actorName}</div>
                <div class="cast-role">Voice Artist</div>
            </div>
        </div>
        <div class="cast-right">
            <div class="character-info">
                <div class="character-name">${member.characterName}</div>
                <div class="character-dub">Telugu Dub</div>
            </div>
            <img src="${member.characterImage}" alt="${member.characterName}" class="character-avatar">
        </div>
    `;
    
    return castDiv;
}
```

#### Crew Loading
```javascript
function loadCrew() {
    if (!crewList) return;
    
    crewList.innerHTML = '';
    if (currentMovie.crew && currentMovie.crew.length > 0) {
        currentMovie.crew.forEach(member => {
            const crewElement = createCrewElement(member);
            crewList.appendChild(crewElement);
        });
    }
}

function createCrewElement(member) {
    const crewDiv = document.createElement('div');
    crewDiv.className = 'cast-member crew-member-type';
    
    crewDiv.innerHTML = `
        <div class="cast-left">
            <img src="${member.avatar}" alt="${member.name}" class="cast-avatar">
            <div class="cast-info">
                <div class="cast-name">${member.name}</div>
                <div class="cast-role">${member.role}</div>
            </div>
        </div>
        <div class="cast-right">
            <div class="character-info">
                <div class="character-name">${currentMovie.title}</div>
            </div>
            <img src="${member.projectImage || currentMovie.poster}" alt="${currentMovie.title}" class="character-avatar">
        </div>
    `;
    
    return crewDiv;
}
```

#### Trailers Loading
```javascript
function loadTrailers() {
    if (!trailersList) return;
    
    trailersList.innerHTML = '';
    if (currentMovie.trailers && currentMovie.trailers.length > 0) {
        currentMovie.trailers.forEach(trailer => {
            const trailerElement = createTrailerElement(trailer);
            trailersList.appendChild(trailerElement);
        });
    }
}

function createTrailerElement(trailer) {
    const trailerDiv = document.createElement('div');
    trailerDiv.className = 'trailer-item';
    trailerDiv.onclick = () => openTrailer(trailer.videoId, trailer.title);
    
    trailerDiv.innerHTML = `
        <div class="trailer-thumbnail">
            <img src="${trailer.thumbnail}" alt="${trailer.title}">
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="trailer-info">
            <div class="trailer-title">${trailer.title}</div>
            <div class="trailer-description">${trailer.description}</div>
        </div>
    `;
    
    return trailerDiv;
}
```

## 🎬 Trailer System

### Opening Trailers
```javascript
function openTrailer(videoId, title = 'Trailer') {
    if (!videoId) return;
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    trailerPlayer.src = embedUrl;
    modalTrailerTitle.textContent = title;
    trailerModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeTrailerModal() {
    trailerModal.style.display = 'none';
    trailerPlayer.src = '';
    document.body.style.overflow = 'auto';
}
```

## 🔍 Search System

### Mobile Search
```javascript
function openMobileSearch() {
    if (mobileSearchOverlay) {
        mobileSearchOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (mobileSearchInput) mobileSearchInput.focus();
        }, 300);
    }
}

function performSearch() {
    const query = mobileSearchInput.value.trim().toLowerCase();
    if (!query) return;
    
    // Search through available movies
    const results = Object.values(detailedMovieData).filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.genres.toLowerCase().includes(query) ||
        movie.studio.toLowerCase().includes(query)
    );
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                <p>No results found</p>
            </div>
        `;
        return;
    }
    
    results.forEach(movie => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.onclick = () => {
            localStorage.setItem('selectedMovieId', movie.id);
            window.location.href = `post.html?id=${movie.id}`;
        };
        
        resultItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="search-result-poster">
            <div class="search-result-info">
                <h4>${movie.title}</h4>
                <p>${movie.genres} • ${movie.year}</p>
            </div>
        `;
        
        searchResults.appendChild(resultItem);
    });
}
```

## 🎨 Theme System

### Theme Management
```javascript
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}
```

## 📊 View Counter System

### Firebase Integration
```javascript
// Firebase Configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-domain.firebaseapp.com",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    // ... other config
};

firebase.initializeApp(firebaseConfig);

// View Counter
function initPostCounter() {
    const db = firebase.database();
    const postCounter = document.getElementById('postViews');
    
    if (postCounter) {
        const postId = window.location.pathname.replace(/[^a-zA-Z0-9]/g, '_') || 'default_post';
        const postRef = db.ref('total_views/posts/' + postId);
        
        // Increment view count
        postRef.transaction((current) => (current || 0) + 1);
        
        // Listen for updates
        postRef.on('value', (snap) => {
            const count = snap.val() || 0;
            postCounter.textContent = count.toLocaleString();
        });
    }
}
```

## 🌐 Telugu Font System

### TeluguFontManager Class
```javascript
class TeluguFontManager {
    constructor() {
        this.teluguFonts = [
            'Noto Sans Telugu',
            'Gautami',
            'Latha',
            'Raavi'
        ];
        this.init();
    }
    
    detectTeluguContent() {
        const teluguRegex = /[\u0C00-\u0C7F]/;
        const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
        
        textElements.forEach(element => {
            if (teluguRegex.test(element.textContent)) {
                element.classList.add('telugu-text');
            }
        });
    }
    
    addTeluguContent(element, teluguText, englishText = '') {
        element.innerHTML = `
            <span class="telugu-text">${teluguText}</span>
            ${englishText ? `<span class="english-text">${englishText}</span>` : ''}
        `;
    }
}
```

## 🔧 Tab System

### Clean Tab Switching
```javascript
function switchCleanTab(tabId) {
    // Remove active class from all tabs and contents
    cleanTabs.forEach(btn => btn.classList.remove('active'));
    cleanTabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Tab event listeners
cleanTabs.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        switchCleanTab(tabId);
    });
});
```

## 📱 Event Listeners Setup

### Complete Event Setup
```javascript
function setupEventListeners() {
    // Tab switching
    cleanTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchCleanTab(tabId);
        });
    });
    
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Trailer button
    if (trailerBtnHero) {
        trailerBtnHero.addEventListener('click', () => {
            if (currentMovie.trailers && currentMovie.trailers.length > 0) {
                openTrailer(currentMovie.trailers[0].videoId, currentMovie.trailers[0].title);
            }
        });
    }
    
    // Read more functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more')) {
            toggleDescription();
        }
    });
    
    // Modal close events
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeTrailerModal();
        }
    });
    
    // Escape key handlers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTrailerModal();
            closeMobileSearch();
        }
    });
    
    // Search functionality
    if (searchToggle) {
        searchToggle.addEventListener('click', openMobileSearch);
    }
    
    if (searchCloseBtn) {
        searchCloseBtn.addEventListener('click', closeMobileSearch);
    }
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}
```

## 🎯 How to Add New Movies

### Step 1: Add Movie Data
```javascript
// In post-script.js, add to detailedMovieData
3: {  // New movie ID
    id: 3,
    title: "New Movie Title",
    year: "2024",
    rating: "8.0",
    ageRating: "PG-13",
    duration: "120 min",
    poster: "https://new-poster-url.jpg",
    backdrop: "https://new-backdrop-url.jpg",
    genres: "Action, Adventure",
    synopsis: "New movie description...",
    studio: "New Studio",
    format: "Feature Film",
    premiereDate: "Released on 2024",
    status: "Completed",
    language: "Telugu Dub Available",
    
    cast: [
        {
            actorName: "New Voice Artist",
            characterName: "New Character",
            actorImage: "https://actor-image.jpg",
            characterImage: "https://character-image.jpg"
        }
    ],
    
    crew: [
        {
            name: "New Crew Member",
            role: "Director",
            avatar: "https://crew-avatar.jpg",
            projectImage: "https://project-image.jpg"
        }
    ],
    
    trailers: [
        {
            title: "Official Trailer",
            description: "New Movie Trailer",
            thumbnail: "https://thumbnail.jpg",
            videoId: "YouTube_Video_ID"
        }
    ],
    
    mrp: "Visible"
}
```

### Step 2: Link to Movie
```html
<!-- In index.html or other pages -->
<a href="post.html?id=3" class="movie-link">
    <img src="poster-url.jpg" alt="Movie Title">
    <h3>Movie Title</h3>
</a>
```

## 🔍 Debugging Tips

### Console Debugging
```javascript
// Check current movie data
console.log('Current Movie:', currentMovie);

// Check if elements exist
console.log('Movie Poster Element:', moviePoster);
console.log('Cast List Element:', castList);

// Check data loading
console.log('Movie ID from URL:', getMovieIdFromURL());
console.log('All Movie Data:', detailedMovieData);
```

### Common Issues
1. **Movie not loading**: Check if movie ID exists in `detailedMovieData`
2. **Images not showing**: Verify image URLs are accessible
3. **Cast not displaying**: Check cast array format and element IDs
4. **Trailers not working**: Verify YouTube video IDs

## 🚀 Performance Tips

### Optimization
```javascript
// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedSearch = debounce(performSearch, 300);
```

## 📋 Checklist for New Movies

- [ ] Add movie data to `detailedMovieData`
- [ ] Include all required fields (id, title, poster, etc.)
- [ ] Add cast information with proper image URLs
- [ ] Add crew information with roles
- [ ] Include trailer information with YouTube IDs
- [ ] Test poster credit visibility setting
- [ ] Verify all images load correctly
- [ ] Test trailer playback
- [ ] Check mobile responsiveness
- [ ] Verify search functionality includes new movie

This guide covers all aspects of the post page JavaScript system. Use it as a reference for adding new movies, debugging issues, and understanding the codebase structure.