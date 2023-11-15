function searchItems() {
    // Get the search input value
    var searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Get the container to display the results
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Read the contents of items.txt and perform the search
    fetch('items.txt')
        .then(response => response.text())
        .then(data => {
            // Split the file content into an array of lines
            var lines = data.split('\n');

            // Iterate through each line and check for a partial match
            lines.forEach(line => {
                if (line.toLowerCase().includes(searchInput)) {
                    // Create a result element
                    var resultElement = document.createElement('div');
                    resultElement.classList.add('result');

                    // Highlight the matching part
                    var highlightedLine = line.replace(new RegExp(searchInput, 'gi'), match => `<span class="highlight">${match}</span>`);

                    // Set the result element's content
                    resultElement.innerHTML = highlightedLine;

                    // Append the result element to the results container
                    resultsContainer.appendChild(resultElement);
                }
            });
        })
        .catch(error => console.error('Error reading items.txt:', error));
}
