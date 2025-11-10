# 🚀 TADB JavaScript Development Guide

## 📋 Table of Contents
1. [Project Structure](#project-structure)
2. [Core JavaScript Files](#core-javascript-files)
3. [Theme Management System](#theme-management-system)
4. [Navigation & UI Components](#navigation--ui-components)
5. [Data Management](#data-management)
6. [Firebase Integration](#firebase-integration)
7. [Mobile Optimization](#mobile-optimization)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)

---

## 📁 Project Structure

### JavaScript Files Overview:
```
TADB/
├── script.js                    # Main homepage functionality
├── post-script.js              # Movie/anime detail pages
├── theme-manager.js             # Global theme system
├── contact-us-script.js         # Contact form handling
├── anime-schedule-script.js     # Schedule page functionality
├── about-us-script.js          # About page interactions
├── content-creators-script.js   # Creator profiles
└── voice-artists-switch.js     # Voice artist pages
```

---

## 🔧 Core JavaScript Files

### 1. **script.js** - Homepage Controller
**Purpose**: Main homepage functionality and movie grid management

**Key Features**:
```javascript
// Movie data management
const movieData = [
    { 
        id: 1, 
        title: "Demon Slayer: Infinity Castle", 
        year: "2024", 
        season: "Season 1",
        poster: "image_url",
        categories: ["Action", "Adventure", "Drama"],
        labels: ["Popular", "Telugu Dub"]
    }
];

// Core functions
- renderMovies()           // Display movie grid
- renderPagination()       // Handle page navigation
- setupEventListeners()    // Initialize UI interactions
- setupScrollEffects()     // Navbar scroll animations
- updateHeroStats()        // Dynamic statistics
```

**Usage Example**:
```javascript
// Initialize homepage
document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
    renderPagination();
    setupEventListeners();
    setupScrollEffects();
});
```

### 2. **post-script.js** - Detail Page Controller
**Purpose**: Movie/anime detail page functionality

**Key Features**:
```javascript
// Detailed movie data structure
const detailedMovieData = {
    1: {
        title: "The Martian",
        year: "2015",
        rating: "8.0",
        cast: [
            {
                actorName: "Matt Damon",
                characterName: "Mark Watney",
                actorImage: "image_url",
                characterImage: "image_url"
            }
        ],
        trailers: [...],
        platforms: [...]
    }
};

// Core functions
- loadMovieData()          // Load specific movie details
- populateMovieInfo()      // Fill page with movie data
- setupTabSystem()         // Handle tab navigation
- createCastElement()      // Generate cast member cards
- setupTrailerModal()      // Video player functionality
```

### 3. **theme-manager.js** - Global Theme System
**Purpose**: Centralized theme management across all pages

**Key Features**:
```javascript
class ThemeManager {
    constructor() {
        this.currentTheme = 'light';
        this.init();
    }
    
    // Core methods
    setTheme(theme)           // Apply theme globally
    toggleTheme()             // Switch between themes
    setupThemeToggles()       // Initialize theme buttons
    updateThemeIcons()        // Update UI icons
}

// Global instance
const globalTheme = new ThemeManager();
```

---

## 🎨 Theme Management System

### Implementation:
```javascript
// Theme switching
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Apply theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('globalTheme', theme);
}
```

### CSS Integration:
```css
/* Default (Light) Theme */
:root {
    --bg-primary: #f8fafc;
    --text-primary: #1e293b;
}

/* Dark Theme */
[data-theme="dark"] {
    --bg-primary: #1a1a2e;
    --text-primary: #ffffff;
}
```

### Usage:
- Automatic theme persistence
- System theme detection
- Smooth transitions
- Cross-page consistency

---

## 🧭 Navigation & UI Components

### Mobile Menu System:
```javascript
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});
```

### Search Functionality:
```javascript
// Search system
const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');

searchToggle.addEventListener('click', function() {
    searchBox.classList.toggle('active');
});

// Search implementation
function performSearch(query) {
    const results = movieData.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.categories.some(cat => 
            cat.toLowerCase().includes(query.toLowerCase())
        )
    );
    return results;
}
```

### Scroll Effects:
```javascript
// Navbar scroll animation
function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
```

---

## 📊 Data Management

### Movie Data Structure:
```javascript
const movieData = [
    {
        id: 1,                           // Unique identifier
        title: "Anime Title",            // Display name
        year: "2024",                    // Release year
        season: "Season 1",              // Season info
        poster: "image_url",             // Poster image
        backdrop: "image_url",           // Background image
        categories: ["Action", "Drama"], // Genres
        labels: ["Popular", "New"],      // Tags
        rating: "8.5",                   // IMDb rating
        synopsis: "Description...",      // Plot summary
        cast: [...],                     // Voice actors
        crew: [...],                     // Production team
        trailers: [...],                 // Video content
        platforms: [...]                 // Streaming services
    }
];
```

### Data Operations:
```javascript
// Filter by category
function filterByCategory(category) {
    return movieData.filter(movie => 
        movie.categories.includes(category)
    );
}

// Sort by rating
function sortByRating() {
    return movieData.sort((a, b) => 
        parseFloat(b.rating) - parseFloat(a.rating)
    );
}

// Search functionality
function searchMovies(query) {
    return movieData.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.categories.some(cat => 
            cat.toLowerCase().includes(query.toLowerCase())
        )
    );
}
```

---

## 🔥 Firebase Integration

### Configuration:
```javascript
// Firebase setup
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "tadb-attendance.firebaseapp.com",
    databaseURL: "https://tadb-attendance-default-rtdb.firebaseio.com",
    projectId: "tadb-attendance"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
```

### View Counter System:
```javascript
// Post view tracking
function initPostCounter() {
    const postCounter = document.getElementById('postViews');
    const postId = window.location.pathname.replace(/[^a-zA-Z0-9]/g, '_');
    
    const postRef = db.ref('total_views/posts/' + postId);
    
    // Increment view count
    postRef.transaction((current) => (current || 0) + 1);
    
    // Listen for updates
    postRef.on('value', (snap) => {
        const count = snap.val() || 0;
        postCounter.textContent = count.toLocaleString();
    });
}
```

### Real-time Updates:
```javascript
// Listen for data changes
db.ref('total_views').on('value', (snapshot) => {
    const data = snapshot.val();
    updateViewCounts(data);
});

// Update UI with new data
function updateViewCounts(data) {
    Object.keys(data.posts || {}).forEach(postId => {
        const element = document.querySelector(`[data-post-id="${postId}"]`);
        if (element) {
            element.textContent = data.posts[postId].toLocaleString();
        }
    });
}
```

---

## 📱 Mobile Optimization

### Responsive Event Handling:
```javascript
// Touch-friendly interactions
function setupMobileOptimizations() {
    // Prevent double-tap zoom on buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        });
    });
    
    // Swipe gestures for image galleries
    setupSwipeGestures();
    
    // Optimize scroll performance
    setupScrollOptimization();
}
```

### Performance Optimizations:
```javascript
// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
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

// Debounced scroll events
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

const debouncedScroll = debounce(handleScroll, 16);
window.addEventListener('scroll', debouncedScroll);
```

---

## 🎯 Best Practices

### 1. **Code Organization**:
```javascript
// Use modules for better organization
const TADB = {
    // Data management
    data: {
        movies: movieData,
        currentPage: 1,
        itemsPerPage: 20
    },
    
    // UI components
    ui: {
        renderMovies: function() { /* ... */ },
        setupEventListeners: function() { /* ... */ },
        showModal: function() { /* ... */ }
    },
    
    // Utilities
    utils: {
        debounce: function() { /* ... */ },
        formatDate: function() { /* ... */ },
        sanitizeInput: function() { /* ... */ }
    }
};
```

### 2. **Error Handling**:
```javascript
// Robust error handling
function loadMovieData(movieId) {
    try {
        const movie = detailedMovieData[movieId];
        if (!movie) {
            throw new Error(`Movie with ID ${movieId} not found`);
        }
        return movie;
    } catch (error) {
        console.error('Error loading movie data:', error);
        showErrorMessage('Failed to load movie information');
        return null;
    }
}

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Log to analytics or error reporting service
});
```

### 3. **Performance Monitoring**:
```javascript
// Performance tracking
function trackPerformance(label, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${label} took ${end - start} milliseconds`);
    return result;
}

// Usage
trackPerformance('Movie Rendering', () => {
    renderMovies();
});
```

### 4. **Accessibility**:
```javascript
// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key closes modals
        if (e.key === 'Escape') {
            closeAllModals();
        }
        
        // Enter key activates focused elements
        if (e.key === 'Enter' && e.target.classList.contains('clickable')) {
            e.target.click();
        }
    });
}

// Screen reader support
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
}
```

---

## 🔍 Troubleshooting

### Common Issues & Solutions:

#### 1. **Theme Not Persisting**:
```javascript
// Check localStorage support
if (typeof(Storage) !== "undefined") {
    localStorage.setItem('globalTheme', theme);
} else {
    // Fallback for older browsers
    document.cookie = `theme=${theme}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
}
```

#### 2. **Mobile Menu Not Working**:
```javascript
// Ensure DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    } else {
        console.error('Menu toggle button not found');
    }
});
```

#### 3. **Images Not Loading**:
```javascript
// Image error handling
function handleImageError(img) {
    img.onerror = function() {
        this.src = 'assets/images/placeholder.jpg'; // Fallback image
        this.alt = 'Image not available';
    };
}

// Apply to all images
document.querySelectorAll('img').forEach(handleImageError);
```

#### 4. **Firebase Connection Issues**:
```javascript
// Check Firebase connection
firebase.database().ref('.info/connected').on('value', function(snapshot) {
    if (snapshot.val() === true) {
        console.log('Connected to Firebase');
    } else {
        console.log('Disconnected from Firebase');
        showOfflineMessage();
    }
});
```

### Debugging Tools:
```javascript
// Debug mode
const DEBUG = true;

function debugLog(message, data = null) {
    if (DEBUG) {
        console.log(`[TADB Debug] ${message}`, data);
    }
}

// Performance monitoring
function monitorPerformance() {
    if (DEBUG) {
        console.log('Page Load Time:', performance.timing.loadEventEnd - performance.timing.navigationStart);
        console.log('DOM Ready Time:', performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart);
    }
}
```

---

## 🚀 Advanced Features

### 1. **Service Worker for Offline Support**:
```javascript
// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('SW registered'))
        .catch(error => console.log('SW registration failed'));
}
```

### 2. **Progressive Web App Features**:
```javascript
// Install prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

function showInstallPrompt() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    }
}
```

### 3. **Analytics Integration**:
```javascript
// Track user interactions
function trackEvent(category, action, label = null) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Usage
trackEvent('Movie', 'View', movieTitle);
trackEvent('Navigation', 'Menu Click', 'Voice Artists');
```

---

## 📚 Resources & References

### Useful Libraries:
- **Intersection Observer**: For lazy loading and scroll animations
- **Firebase SDK**: Real-time database and analytics
- **Swiper.js**: Touch sliders and carousels
- **AOS**: Animate on scroll library

### Documentation Links:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

### Performance Tools:
- Chrome DevTools
- Lighthouse
- WebPageTest
- GTmetrix

---

**© 2024 TADB JavaScript Development Guide**

*This guide covers all JavaScript functionality in the TADB website. For specific implementation questions or advanced features, refer to the individual script files and their inline documentation.*