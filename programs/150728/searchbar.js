const field = document.getElementById("urlsearch");
field.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const webpage = document.querySelector("webpage");
        webpage.src = event.target.value;
    }
});
// deprecated