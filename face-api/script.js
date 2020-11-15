//Set up HTML selectors
const input = document.getElementById('camera-stream');
let displaySize = {
	width: input.offsetWidth,
	height: input.offsetHeight
};
const canvas = document.getElementById('overlay')
const canvasContext = canvas.getContext("2d");

const faces = [
	"YashBPhoto.JPG", "YashBPhoto.jpg", "YashBPhoto.jpg",
	"YashBPhoto.jpg", "YashBPhoto.jpg",
	"YashBPhoto.jpg", "YashBPhoto.jpg",
].map(function(src) {
	const i = new Image();
	i.src = "../img/" + src;
	return i;
});

let currentExpression = "neutral";

// Load machine learning models
faceapi.nets.faceExpressionNet.loadFromUri("models");
faceapi.nets.tinyFaceDetector.loadFromUri("models");

// Set up camera stream, then run detection on it.
setupCameraInput();
setInterval(() => {
	lookForFaces();
}, 100);

function drawFace(detections, expressions) {
	// Clear the screen
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);

	if (moodDetectionMode) {
		currentExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
	}

	const box = detections[0].box
	const imgWidth = box.width * 2;
	const imgHeight = box.height * 2;
	const x = box.x - imgWidth / 4;
	const y = box.y - imgHeight / 4;
	const exprImg = faces.filter(f => f.src.includes(currentExpression))[0];
	canvasContext.drawImage(exprImg, x, y, imgWidth, imgHeight)
}

async function lookForFaces() {
	// Resize the overlay, if the screen was resized.
	if (input.offsetWidth !== displaySize.width || input.offsetHeight !== displaySize.height) {
		displaySize = {
			width: input.offsetWidth,
			height: input.offsetHeight
		};
		faceapi.matchDimensions(canvas, displaySize);
	}

	// Get the detection and if no faces are seen return.
	const detectionResult = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions({
		inputSize: 128
	})).withFaceExpressions();
	if (detectionResult.length === 0) {
		return;
	}
	// resize the detected boxes in case your displayed image has a different size than the original
	const detections = [detectionResult[0].detection];
	const expressions = detectionResult[0].expressions;
	const resizedDetections = faceapi.resizeResults(detections, displaySize)

	drawFace(resizedDetections, expressions);
}

async function setupCameraInput() {
	let stream = null;
	let constraints = {
		audio: false,
		video: {
			facingMode: "user"
		}
	};

	try {
		stream = await navigator.mediaDevices.getUserMedia(constraints);
		var video = document.querySelector('video');
		video.srcObject = stream;
	} catch (err) {
		input.style.display = "none";
		document.getElementById('mood-detection').style.display = "none";
		document.getElementById('camera-denied').style.display = "inherit";
	}
}

let moodDetectionMode = false;

function toggleMoodDetectionMode() {
	moodDetectionMode = !moodDetectionMode;
}
