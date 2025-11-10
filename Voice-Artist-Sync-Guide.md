# Voice Artist Sync System Guide

## Overview
The Voice Artist Sync System automatically synchronizes cast and crew data between post pages and the voice artist page. When you add cast/crew information to a movie post, it automatically appears in the voice artist section.

## How It Works

### Automatic Sync
1. **From Post Page**: When you add cast/crew data to `post-script.js` in the `detailedMovieData`, the system automatically detects and stores this information
2. **To Voice Artist Page**: The voice artist page automatically displays all detected artists and their characters
3. **Real-time Updates**: Changes are saved to browser localStorage and sync across pages

### Manual Addition
Use the admin interface (`voice-artist-admin.html`) to manually add new voice artists.

## Adding Cast/Crew Data to Posts

### In post-script.js
Add cast and crew data to your movie objects:

```javascript
const detailedMovieData = {
    1: {
        // ... other movie data
        
        // Cast members (voice actors)
        cast: [
            { 
                actorName: "Artist Name", 
                language: "Telugu", 
                actorImage: "https://example.com/actor.jpg",
                characterName: "Character Name", 
                seriesName: "Movie/Anime Name", 
                characterImage: "https://example.com/character.jpg" 
            }
        ],
        
        // Crew members (script writers, directors, etc.)
        crew: [
            { 
                name: "Crew Member Name", 
                role: "Script Writer", 
                avatar: "https://example.com/avatar.jpg" 
            }
        ]
    }
};
```

### The system will automatically:
- Extract this data when the post page loads
- Add the artists to the voice artist database
- Display them on the voice artist page
- Update statistics and counters

## Using the Admin Interface

### Access
Open `voice-artist-admin.html` in your browser

### Adding New Artists
1. Fill in artist information (name, role, avatar, social links)
2. Add characters they voice
3. Click "Add Voice Artist"

### Database Management
- **View Database**: See all stored artists and statistics
- **Export**: Download backup of all data
- **Clear All**: Reset the database (use with caution)
- **View Page**: Open the voice artist page to see results

## File Structure

```
├── voice-artist-sync.js          # Main sync system
├── voice-artist-admin.html       # Admin interface
├── post.html                     # Movie post page (includes sync)
├── voice-artists-real.html       # Voice artist page (includes sync)
├── post-script.js               # Movie data (source for sync)
└── voice-artists-switch.js      # Voice artist page functionality
```

## Data Storage

### LocalStorage Key: `voiceArtistDatabase`
```javascript
{
    "artists": {
        "artist_name_key": {
            "name": "Artist Name",
            "role": "Voice Actor",
            "avatar": "image_url",
            "characters": [
                {
                    "name": "Character Name",
                    "anime": "Anime Name",
                    "image": "character_image_url",
                    "type": "Main Character"
                }
            ],
            "socialLinks": {
                "instagram": "instagram_url"
            },
            "stats": {
                "totalCharacters": 5,
                "totalAnimes": 3
            }
        }
    },
    "lastUpdated": 1699123456789
}
```

## Manual Operations

### Add Artist Programmatically
```javascript
// In browser console or script
addNewVoiceArtist({
    name: "New Artist Name",
    role: "Voice Actor",
    avatar: "https://example.com/avatar.jpg",
    characters: [{
        name: "Character Name",
        anime: "Anime Name",
        image: "https://example.com/character.jpg",
        type: "Main Character"
    }],
    socialLinks: {
        instagram: "https://instagram.com/artist"
    }
});
```

### Access Database
```javascript
// View all artists
console.log(voiceArtistSync.getAllArtists());

// Export database
console.log(voiceArtistSync.exportDatabase());

// Clear database
voiceArtistSync.clearDatabase();
```

## Features

### Automatic Features
- ✅ Auto-detection of cast/crew from post pages
- ✅ Automatic sync to voice artist page
- ✅ Real-time statistics updates
- ✅ Duplicate prevention
- ✅ Data persistence in localStorage

### Manual Features
- ✅ Admin interface for adding artists
- ✅ Character management
- ✅ Social media links
- ✅ Database export/import
- ✅ Data backup and restore

### Page Features
- ✅ Accordion-style artist display
- ✅ Character galleries with images
- ✅ Anime series grouping
- ✅ Statistics counters
- ✅ Responsive design

## Troubleshooting

### Data Not Syncing
1. Check browser console for errors
2. Ensure `voice-artist-sync.js` is loaded on both pages
3. Verify movie data format in `post-script.js`

### Artists Not Appearing
1. Check if cast/crew data exists in movie object
2. Refresh the voice artist page
3. Check localStorage for data: `localStorage.getItem('voiceArtistDatabase')`

### Admin Interface Issues
1. Ensure all required fields are filled
2. Check browser console for JavaScript errors
3. Try refreshing the page

## Best Practices

### Data Entry
- Use consistent naming for artists across different projects
- Provide high-quality image URLs
- Include social media links when available
- Use descriptive character types (Main Character, Supporting, etc.)

### Maintenance
- Regularly export database as backup
- Monitor localStorage usage (has size limits)
- Keep image URLs accessible and permanent

## Future Enhancements

### Planned Features
- [ ] Image upload and hosting
- [ ] Advanced search and filtering
- [ ] Artist profiles with detailed information
- [ ] Integration with external databases
- [ ] Bulk import/export tools
- [ ] Admin authentication

### Customization
The system is designed to be easily customizable:
- Modify artist card layouts in `createArtistElement()`
- Add new data fields in the database structure
- Extend the admin interface with additional features
- Integrate with external APIs or databases

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify data format matches the examples
3. Test with the admin interface first
4. Check localStorage data directly

The system is designed to be robust and handle various data formats, but consistent data entry will provide the best results.