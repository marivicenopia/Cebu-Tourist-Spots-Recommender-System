const dummyUsers = [
    { id: 1, preferences: [5, 3, 4, 4, 2, 1] },
    { id: 2, preferences: [4, 2, 5, 1, 3, 2] },
    { id: 3, preferences: [3, 5, 4, 2, 1, 3] },
    { id: 4, preferences: [2, 4, 3, 5, 4, 2] },
    { id: 5, preferences: [1, 3, 2, 4, 5, 4] },
    { id: 6, preferences: [5, 4, 3, 2, 1, 5] },
    { id: 7, preferences: [4, 3, 5, 1, 2, 4] },
    { id: 8, preferences: [3, 2, 4, 5, 3, 1] },
    { id: 9, preferences: [2, 1, 3, 4, 5, 2] },
    { id: 10, preferences: [1, 5, 2, 3, 4, 5] }
];

const places = [
    "Historical Sites",
    "Beaches and Islands",
    "Adventure and Nature",
    "Religious Sites",
    "Urban and Entertainment",
    "Cultural and Local Experiences"
];

const spots = {
    "Historical Sites": ["Magellan's Cross", "Fort San Pedro", "Yap-San Diego Ancestral House", "Plaza Independencia", "Heritage of Cebu Monument"],
    "Beaches and Islands": ["Bantayan Island", "Malapascua Island", "Sumilon Island", "Tingko Beach", "Olango Island"],
    "Adventure and Nature": ["Osmeña Peak", "Kawasan Falls Canyoneering", "Inambakan Falls", "Mainit Hot Spring", "Casino Peak Trek"],
    "Religious Sites": ["Sto. Nino", "Cebu Taoist Temple", "Cebu Metropolitan Cathedral", "Simala Shrine", "Archdiocesan Museum of Cebu"],
    "Urban and Entertainment": ["Kartzone", "Nustar Mall", "Ayala Center Cebu Cinemas", "Cebu Ocean Park", "Music One Family KTV"],
    "Cultural and Local Experiences": ["Basilica Minore del Santo Niño de Cebu", "Sirao Flower Farm", "Museo Sugbo", "Temple of Leah", "Casa Gorordo"]
};

const spotImages = {
    "Magellan's Cross": "img/historical-sites/magellans-cross.png",
    "Fort San Pedro": "img/historical-sites/fort-san-pedro.JPG",
    "Yap-San Diego Ancestral House": "img/historical-sites/yap-san-diego.jpg",
    "Plaza Independencia": "img/historical-sites/plaza-independencia.jpg",
    "Heritage of Cebu Monument": "img/historical-sites/heritage-of-cebu-monument.jpg",
    "Bantayan Island": "img/beaches-and-islands/bantayan-island.jpg",
    "Malapascua Island": "img/beaches-and-islands/malapascua-island.png",
    "Sumilon Island": "img/beaches-and-islands/sumilon-island.png",
    "Tingko Beach": "img/beaches-and-islands/tingko-beach.jpg",
    "Olango Island": "img/beaches-and-islands/olango-island.jpg",
    "Osmeña Peak": "img/adventure-and-nature/osmena-peak.jpg",
    "Kawasan Falls Canyoneering": "img/adventure-and-nature/kawasan-falls.jpg",
    "Inambakan Falls": "img/adventure-and-nature/inambakan-falls.png",
    "Mainit Hot Spring": "img/adventure-and-nature/mainit-hot-spring.jpg",
    "Casino Peak Trek": "img/adventure-and-nature/casino-peak.jpg",
    "Sto. Nino": "img/religious-sites/basilica-minore-del-santo-nino.jpg",
    "Cebu Taoist Temple": "img/religious-sites/taoist-temple.jpg",
    "Cebu Metropolitan Cathedral": "img/religious-sites/metropolitan-cathedral.jpg",
    "Simala Shrine": "img/religious-sites/simala-shrine.png",
    "Archdiocesan Museum of Cebu": "img/religious-sites/archdiocesan-museum-of-cebu.png",
    "Kartzone": "img/urban-and-entertainment/kartzone.jpg",
    "Nustar Mall": "img/urban-and-entertainment/nustar-mall.jpg",
    "Ayala Center Cebu Cinemas": "img/urban-and-entertainment/ayala-center.jpg",
    "Cebu Ocean Park": "img/urban-and-entertainment/cebu-ocean-park.jpg",
    "Music One Family KTV": "img/urban-and-entertainment/music-one-ktv.JPG",
    "Basilica Minore del Santo Niño de Cebu": "img/cultural-and-local-experiences/basilica-minore-del-santo-nino.jpg",
    "Sirao Flower Farm": "img/cultural-and-local-experiences/sirao-flower-farm.jpg",
    "Museo Sugbo": "img/cultural-and-local-experiences/museo-sugbo.png",
    "Temple of Leah": "img/cultural-and-local-experiences/temple-of-leah.jpg",
    "Casa Gorordo": "img/cultural-and-local-experiences/casa-gorordo.jpg"
};

const spotDescriptions = {
    "Magellan's Cross": "A historical landmark in Cebu City, planted by Portuguese and Spanish explorers.",
    "Fort San Pedro": "A military defense structure in Cebu, built by Spanish and indigenous Cebuano laborers.",
    "Yap-San Diego Ancestral House": "One of the oldest residential houses in the Philippines, built in the late 17th century.",
    "Plaza Independencia": "A historical park in Cebu City, symbolizing the country's independence.",
    "Heritage of Cebu Monument": "A tableau of sculptures showcasing significant events in Cebu's history.",
    "Bantayan Island": "A beautiful island known for its white sandy beaches and clear blue waters.",
    "Malapascua Island": "A small island famous for its diving spots and thresher sharks.",
    "Sumilon Island": "A private island with pristine beaches and a marine sanctuary.",
    "Tingko Beach": "A popular beach destination in Alcoy, Cebu, known for its white sand and clear waters.",
    "Olango Island": "An island known for its wildlife sanctuary and bird watching.",
    "Osmeña Peak": "The highest peak in Cebu, offering panoramic views of the island.",
    "Kawasan Falls Canyoneering": "A popular adventure activity involving trekking and jumping into waterfalls.",
    "Inambakan Falls": "A stunning waterfall in Ginatilan, Cebu, with multiple tiers and clear blue waters.",
    "Mainit Hot Spring": "A natural hot spring in Malabuyoc, Cebu, known for its therapeutic properties.",
    "Casino Peak Trek": "A trekking destination in Dalaguete, Cebu, offering scenic views of the surrounding landscape.",
    "Sto. Nino": "A historic church in Cebu City, housing the oldest religious relic in the Philippines.",
    "Cebu Taoist Temple": "A Taoist temple in Cebu City, offering panoramic views of the city.",
    "Cebu Metropolitan Cathedral": "The ecclesiastical seat of the Metropolitan Archdiocese of Cebu.",
    "Simala Shrine": "A castle-like church in Sibonga, Cebu, known for its miraculous Virgin Mary statue.",
    "Archdiocesan Museum of Cebu": "A museum in Cebu City, showcasing the history and culture of Cebu.",
    "Kartzone": "A go-kart racing facility in Cebu City, offering fun and excitement for all ages.",
    "Nustar Mall": "A luxury shopping mall in Cebu City, featuring high-end brands and dining options.",
    "Ayala Center Cebu Cinemas": "A cinema complex in Ayala Center Cebu, offering the latest movies and comfortable seating.",
    "Cebu Ocean Park": "An oceanarium in Cebu City, featuring a variety of marine life and interactive exhibits.",
    "Music One Family KTV": "A family-friendly karaoke venue in Cebu City, offering private rooms and a wide selection of songs.",
    "Basilica Minore del Santo Niño de Cebu": "A historic church in Cebu City, housing the oldest religious relic in the Philippines.",
    "Sirao Flower Farm": "A picturesque flower farm in Cebu, known for its vibrant celosia flowers.",
    "Museo Sugbo": "A museum in Cebu City, showcasing the history and culture of Cebu.",
    "Temple of Leah": "A grand temple in Cebu, built as a symbol of undying love and devotion.",
    "Casa Gorordo": "A historic house museum in Cebu City, offering insights into the lifestyle of Cebu's elite during the Spanish colonial period."
};

// Calculate the average rating for a user
function calculateAverageRating(preferences) {
    const total = preferences.reduce((sum, rating) => sum + rating, 0);
    return total / preferences.length;
}

function cosineSimilarity(userA, userB) {
    const dotProduct = userA.reduce((sum, rating, i) => sum + rating * userB[i], 0);
    const magnitudeA = Math.sqrt(userA.reduce((sum, rating) => sum + Math.pow(rating, 2), 0));
    const magnitudeB = Math.sqrt(userB.reduce((sum, rating) => sum + Math.pow(rating, 2), 0));

    return dotProduct / (magnitudeA * magnitudeB);
}

function getRecommendedUser(newUserPreferences) {
    let bestMatch = null;
    let highestSimilarity = -1;

    dummyUsers.forEach(user => {
        const similarity = cosineSimilarity(newUserPreferences, user.preferences);
        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            bestMatch = user;
        }
    });

    return bestMatch;
}

function predictRating(newUserPreferences, placeIndex) {
    let numerator = 0;
    let denominator = 0;

    dummyUsers.forEach(user => {
        const similarity = cosineSimilarity(newUserPreferences, user.preferences);
        numerator += similarity * (user.preferences[placeIndex] - calculateAverageRating(user.preferences));
        denominator += Math.abs(similarity);
    });

    return calculateAverageRating(newUserPreferences) + (numerator / denominator);
}

// Fetch newly registered user's data
const newUser = JSON.parse(localStorage.getItem('newUser'));
const newUserPreferences = JSON.parse(localStorage.getItem('newUserPreferences'));

// Get the recommended user based on the new user's preferences
const recommendedUser = getRecommendedUser(newUserPreferences);

//Predict ratings for all places
const predictedRatings = places.map((_, index) => predictRating(newUserPreferences, index));

//Get place with highest prediction
const highestRatedPlaceIndex = predictedRatings.indexOf(Math.max(...predictedRatings));
const recommendedPlace = places[highestRatedPlaceIndex];
const recommendedSpots = spots[recommendedPlace];

//Display recommendations and other places
document.addEventListener('DOMContentLoaded', () => {
    const userInfoContainer = document.getElementById('user-info');
    const recommendationContainer = document.getElementById('recommendation-result');
    const recommendationSourceContainer = document.getElementById('recommendation-source');
    const allPlacesContainer = document.getElementById('all-places');

    if (newUser) {
        userInfoContainer.innerHTML = `<p>Welcome, ${newUser.username}!</p>`;
    }

    if (recommendedPlace) {
        recommendationContainer.innerHTML = `<p>Recommended Place: <strong>${recommendedPlace}</strong></p><div class="card-container">${recommendedSpots.map(spot => `<div class="card"><h3>${spot}</h3><img src="${spotImages[spot]}" alt="${spot}"><p>${spotDescriptions[spot]}</p></div>`).join('')}</div>`;
        recommendationSourceContainer.innerHTML = `<p>Recommendation from User ID: ${recommendedUser.id}</p>`;
    } else {
        recommendationContainer.innerHTML = '<p>No recommendations available.</p>';
    }

    allPlacesContainer.innerHTML = Object.keys(spots).map(category => {
        return `<h2>${category}</h2><div class="card-container">${spots[category].map(spot => `<div class="card"><h3>${spot}</h3><img src="${spotImages[spot]}" alt="${spot}"><p>${spotDescriptions[spot]}</p></div>`).join('')}</div>`;
    }).join('');
});