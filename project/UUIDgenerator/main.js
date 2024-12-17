document.getElementById('hasil').innerHTML = crypto.randomUUID();
function generateUUID() {
    document.getElementById('hasil').innerHTML = crypto.randomUUID();
}

function copyUUID() {
    let text = document.getElementById('hasil').innerText;
    navigator.clipboard.writeText(text)
        .then(() => alert("Text telah di salin"))
        .catch(err => console.log("error", err));
}