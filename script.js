
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    const phrases = [
        "Dead Maggot",
        "Nazi Branded Horoscope Script",
        "Line Drawing of Scale",
        "White House Blueprint",
        "1532 Cigars",
        "Bitmap of Stripmine",
        "Original Emerald Shitcoin",
        "lol superman (original upload)",
        "Illegal Paris Catacombs Tour",
        "Dismembered Dentist Photograph",
        "Henry Wrinkler",
        "Brown Wrestling Bag",
        "Benjamin Blumchen Cassete Tape",
        "The Favorite Song",
        "Original Garageband",
        "Frozen German Shepard Shit",
        "Down Syndrome Cat",
        "Expired Ibuprofen",
        "Crippled Fat Person",
        "Single Beat Up Balenciaga Track 2",
        "Metallica T-Shirt Worn By Fascist",
        "Frog",
        "Faulty Airbrush",
        "Dead Space Disc",
        "Ziploc Bag of Used Needles",
        "Bloody Cracked Helmet",
        "Rusty Piercing",
        "iPod with Shambalah 2011",
        "Faulty Android Charger"
    ];

    const colors = ["red", "blue", "purple", "yellow", "green", "black", "white"];

    const texts = [];
    const fontSize = 20;

    for (let i = 0; i < 500; i++) {
        const phraseIndex = Math.floor(Math.random() * phrases.length);
        const colorIndex = Math.floor(Math.random() * colors.length);

        texts.push({
            id: i, // Assigning unique id to each text
            text: phrases[phraseIndex],
            color: colors[colorIndex],
            x: Math.random() * (canvas.width - ctx.measureText(phrases[phraseIndex]).width),
            y: Math.random() * (canvas.height - fontSize),
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 - 1
        });
    }

    ctx.font = `${fontSize}px Arial`;

    function drawText(text) {
        ctx.fillStyle = text.color;
        ctx.fillText(text.text, text.x, text.y);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < texts.length; i++) {
            drawText(texts[i]);

            if (texts[i].x + texts[i].dx > canvas.width - ctx.measureText(texts[i].text).width || texts[i].x + texts[i].dx < 0) {
                texts[i].dx = -texts[i].dx;
            }
            if (texts[i].y + texts[i].dy > canvas.height || texts[i].y + texts[i].dy < fontSize) {
                texts[i].dy = -texts[i].dy;
            }

            texts[i].x += texts[i].dx;
            texts[i].y += texts[i].dy;
        }
    }

    // Function to handle mouse click
    canvas.addEventListener('click', function(event) {
        const selectedPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const rarityBoxes = ['common', 'uncommon', 'rare', 'epic'];
        const randomRarityBox = rarityBoxes[Math.floor(Math.random() * rarityBoxes.length)];

        document.getElementById(randomRarityBox + 'Text').innerHTML += `<p>${selectedPhrase}</p>`;
    });

    setInterval(draw, 10);

    document.addEventListener("DOMContentLoaded", function() {
        // Function to play a random sound
        function playRandomSound() {
            // Generate a random number between 1 and 6
            const randomIndex = Math.floor(Math.random() * 6) + 1;
            
            // Construct the file name based on the random number
            const fileName = `sound${randomIndex}.wav`;
    
            // Create an audio element
            const audio = new Audio();
            audio.src = `SFX/${fileName}`;
    
            // Play the selected sound
            audio.play();
        }
    
        // Add click event listener to the whole page
        document.body.addEventListener("click", function() {
            // Call the function to play a random sound
            playRandomSound();
        });
    });
    
    
    
