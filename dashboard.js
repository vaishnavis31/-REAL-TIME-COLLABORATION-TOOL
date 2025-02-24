// Function to fetch documents
function fetchDocuments() {
    const token = localStorage.getItem('authToken'); // Retrieve the token if logged in

    fetch('http://localhost:3000/api/documents', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`  // Include the JWT token for authorization
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Process the documents here, e.g., display them on the page
            displayDocuments(data.documents);
        } else {
            alert('Failed to fetch documents: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

// Function to display documents
function displayDocuments(documents) {
    const documentsList = document.getElementById('documentsList');
    documentsList.innerHTML = ''; // Clear previous list

    documents.forEach(doc => {
        const docElement = document.createElement('div');
        docElement.innerHTML = `<p>${doc.title}</p>`;
        documentsList.appendChild(docElement);
    });
}
