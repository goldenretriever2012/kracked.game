const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const phrases = [
    "Lorem ipsum",
    "Dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod",
    "Tempor incididunt",
    "Ut labore et dolore",
    "Magna aliqua",
    "Ut enim ad minim veniam",
    "Quis nostrud exercitation",
    "Ullamco laboris nisi",
    "Ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor",
    "In reprehenderit in voluptate",
    "Velit esse cillum dolore",
    "Eu fugiat nulla pariatur",
    "Excepteur sint occaecat",
    "Cupidatat non proident",
    "Sunt in culpa qui officia",
    "Deserunt mollit anim id est laborum",
    "Omnis iste natus error",
    "Sit voluptatem accusantium",
    "Doloremque laudantium",
    "Totam rem aperiam",
    "Eaque ipsa quae ab illo",
    "Inventore veritatis et quasi",
    "Architecto beatae vitae dicta",
    "Sunt explicabo",
    "Nemo enim ipsam voluptatem",
    "Quia voluptas sit aspernatur"
];

const colors = ["red", "blue", "purple", "yellow", "green", "black", "white"];

const texts = [];
const fontSize = 20;

for (let i = 0; i < 1000; i++) {
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

    for (let i = 100; i < texts.length; i++) {
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

// Function to check if a point (x, y) is inside a rectangle
function isInsideRect(x, y, rect) {
    return x >= rect.x && x <= rect.x + rect.width &&
           y >= rect.y && y <= rect.y + rect.height;
}

// Function to handle mouse click
canvas.addEventListener('click', function(event) {
    const rectIndex = Math.floor(Math.random() * 4); // Randomly select one of the four rectangles
    const clickedX = event.clientX - canvas.offsetLeft;
    const clickedY = event.clientY - canvas.offsetTop;

    for (let i = 0; i < texts.length; i++) {
        if (isInsideRect(texts[i].x, texts[i].y, {
            x: rectIndex * 200, // Adjusting x-coordinate based on the selected rectangle
            y: 0,
            width: 200,
            height: 160
        })) {
            // Draw text inside the selected rectangle
            ctx.clearRect(rectIndex * 200, 0, 200, 160);
            ctx.fillStyle = texts[i].color;
            ctx.fillText(texts[i].text, rectIndex * 200, 80);
            break;
        }
    }
});

setInterval(draw, 10);
