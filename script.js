document.querySelector('.search-button').addEventListener('click', function() {
    const url = document.querySelector('.searchbar').value;
    const modal = document.getElementById('searchModal');
    const iframe = document.getElementById('searchIframe');
    
    if (url.startsWith('https://')) {
        iframe.src = `/active/embed.html?url=${encodeURIComponent(url)}`;
        modal.style.display = 'block';
    } else {
        alert('The url you search MUST use https://');
    }
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('searchModal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('searchModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
