const sosBtn = document.getElementById("sosBtn");
const statusText = document.getElementById("status");
const locationText = document.getElementById("location");
const mapLink = document.getElementById("mapLink");
const tipText = document.getElementById("tip");

const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
let holdTimer;
let tapCount = 0;
let tapTimer;

/* ---------- SAFETY TIPS ---------- */
const tips = [
    "Stay aware of your surroundings.",
    "Share live location with trusted contacts.",
    "Avoid isolated areas at night.",
    "Keep emergency numbers accessible."
];
tipText.innerText = tips[Math.floor(Math.random() * tips.length)];

/* ---------- PRIMARY SOS ---------- */
if (isMobile) {
    statusText.innerText = "Hold SOS for 3 seconds";
    sosBtn.addEventListener("touchstart", startHold);
    sosBtn.addEventListener("touchend", cancelHold);
} else {
    statusText.innerText = "Click SOS to send alert";
    sosBtn.addEventListener("click", triggerSOS);
}

function startHold() {
    statusText.innerText = "Activating...";
    holdTimer = setTimeout(triggerSOS, 3000);
}

function cancelHold() {
    clearTimeout(holdTimer);
    statusText.innerText = "Hold SOS for 3 seconds";
}

/* ---------- SILENT SOS ---------- */
document.body.addEventListener("click", silentTrigger);
document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "s") silentTrigger();
});

function silentTrigger() {
    tapCount++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => tapCount = 0, 800);

    if (tapCount === 3) {
        triggerSOS();
        tapCount = 0;
    }
}

/* ---------- SHAKE DETECTION (MOBILE) ---------- */
let lastX = 0;
if (isMobile && window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", e => {
        const x = e.accelerationIncludingGravity.x;
        if (Math.abs(x - lastX) > 15) triggerSOS();
        lastX = x;
    });
}

/* ---------- SOS CORE ---------- */
function triggerSOS() {
    alert("🚨 SOS ACTIVATED");
    navigator.vibrate && navigator.vibrate([200,100,200]);
    getLocation();
    saveHistory();
    startCheckIn();
}

/* ---------- LOCATION ---------- */
function getLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        locationText.innerText = `${latitude}, ${longitude}`;
        mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`;
        mapLink.innerText = "View on Map";
    });
}

/* ---------- AUTO CHECK-IN ---------- */
function startCheckIn() {
    setTimeout(() => {
        if (!confirm("Are you safe?")) triggerSOS();
    }, 60000);
}

/* ---------- FAKE CALL ---------- */
function fakeCall() {
    navigator.vibrate && navigator.vibrate([300,100,300]);
    alert("📞 Incoming call from MOM");
}

/* ---------- STORAGE ---------- */
function saveHistory() {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push("SOS at " + new Date().toLocaleString());
    localStorage.setItem("history", JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const list = document.getElementById("history");
    if (!list) return;
    list.innerHTML = "";
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.forEach(h => {
        const li = document.createElement("li");
        li.innerText = h;
        list.appendChild(li);
    });
}

loadHistory();
