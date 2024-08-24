let posts = [];

axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => posts = response.data)
        .catch(error => console.error('Error fetching data', error));


// Function to render the search results
const renderResults = (results) => {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    if(results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        results.forEach(post => {
            const div = document.createElement('div');

            div.className = 'result-item';
            div.innerHTML = `<strong>${post.title}</strong></br>${post.body}`;

            // div.innerHTML = `${post.body}`;
            resultsContainer.appendChild(div);

        });

    }
}

// Function to handle the search

const handleSearch= (event) => {
    const query = event.target.value.toLowerCase();

    // If the search input is empty, clear the results
    if (query === '') {
        renderResults([]);
        return;
    }
    const filteredResults = posts.filter(post => {

        // if (post.title.toLowerCase().includes(query)) {
            // return true;
            return post.title.toLowerCase().includes(query)
        // }
        
    });

    renderResults(filteredResults);
}

// Attach event listener to the search input
document.getElementById('searchInput').addEventListener('input', handleSearch);