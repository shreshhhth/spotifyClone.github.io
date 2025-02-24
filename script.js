document.getElementById("search-button").addEventListener("click", function() {
    let searchBar = document.getElementById("search-bar");
    let searchContainer = document.querySelector(".search"); // Target the main search div

    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";  // Show search bar
        searchContainer.style.backgroundColor = "#202020"; // Set background color when active
        
        searchBar.focus();  // Auto-focus on input field
    } else {
        searchBar.style.display = "none";  // Hide search bar
        searchContainer.style.backgroundColor = "transparent"; // Remove background
    }
});


document.querySelectorAll("hover").forEach(card => {
    const playButton = card.querySelector('.play');

    card.addEventListener('mousemove', ()=>{
        playButton.style.opacity = 1;
    });
    card.addEventListener('mouseout', ()=>{
        playButton.style.opacity = 0;
    });
}); 

