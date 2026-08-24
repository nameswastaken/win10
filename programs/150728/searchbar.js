const field = document.getElementById("urlsearch");
field.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const webpage = document.getElementById("webpage");
        webpage.src = event.target.value;
    }
});