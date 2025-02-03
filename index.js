function updateTime() {
    document.getElementById("utc-time").innerText = new Date().toUTCString();
}
updateTime();
