document.getElementById('drop-area').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && isImageFile(file)) {
        displayPreview(file);
    } else {
        alert('Please upload a valid image file.');
    }
});

document.addEventListener('paste', (event) => {
    const clipboardItems = (event.clipboardData || window.clipboardData).items;
    for (const item of clipboardItems) {
        if (item.kind === 'file' && isImageFile(item.getAsFile())) {
            const file = item.getAsFile();
            displayPreview(file);
            break;
        }
    }
});

function isImageFile(file) {
    // Validate file type (supports common image formats)
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return validImageTypes.includes(file.type);
}

function displayPreview(file) {
    const img = document.getElementById('preview');
    const reader = new FileReader();

    reader.onload = (event) => {
        img.src = event.target.result;
        img.style.display = 'block'; // Make the image visible
    };

    reader.onerror = () => {
        alert('Error reading file. Please try again.');
    };

    reader.readAsDataURL(file);
}