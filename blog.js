const proxy = 'https://api.allorigins.win/get?url=';
const target = encodeURIComponent('https://library.gbc.edu/blogs/hirons-library');

fetch(`${proxy}${target}`)
  .then(response => response.json())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');
    const latestPost = doc.querySelector('.post-title'); // Adjust this selector

    if (latestPost) {
      document.getElementById('eb-feature-excerpt').textContent = latestPost.textContent.trim();
      document.getElementById('eb-feature-link').href = latestPost.href;
    } else {
      document.getElementById('eb-feature-excerpt').textContent = 'Latest post not found.';
    }
  })
  .catch(() => {
    document.getElementById('eb-feature-excerpt').textContent = 'Unable to load latest post.';
  });