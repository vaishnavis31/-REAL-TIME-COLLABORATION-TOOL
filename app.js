const socket = io('http://localhost:3000');
const editor = document.getElementById('document-editor');

// Dynamically get the document ID (you can pass this from the backend or URL)
const documentId = new URLSearchParams(window.location.search).get('documentId');  // Example: Get from URL params

// Dynamically get the user ID (could be from session or JWT)
const userId = localStorage.getItem('userId') || 'guest';  // Replace with real user ID logic

// Emit join event to join the document room
socket.emit('join_document', { documentId, userId });

// Listen for content updates from other users
socket.on('update_content', (data) => {
    if (data.userId !== userId) {
        editor.value = data.content;  // Update the editor with the new content from other users
    }
});

// Send content updates to the server in real-time
editor.addEventListener('input', () => {
    const content = editor.value;
    socket.emit('content_update', { documentId, content, userId });
});
