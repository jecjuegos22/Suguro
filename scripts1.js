function search() {
    var query = document.getElementById("searchInput").value;
    if (query.trim() !== "") {
        // Redirect to search results page passing the query as URL parameter
        window.location.href = "search_results.html?q=" + encodeURIComponent(query);
    }
}
