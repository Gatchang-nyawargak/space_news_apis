async function fetchNews() {
    const searchQuery = document.getElementById('search').value.trim().toLowerCase();
    let response;
    
    if (searchQuery) {
        response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?title_contains=${encodeURIComponent(searchQuery)}`);
    }
    else{
        response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
    } 
    
    const articles = await response.json();
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes('space') || article.summary.toLowerCase().includes('space') ||
        article.title.toLowerCase().includes('nasa') || article.summary.toLowerCase().includes('nasa') ||
        article.title.toLowerCase().includes('blue origin') || article.summary.toLowerCase() .includes('blue origin')
    );
    const articlesshow=searchQuery? articles:articles.slice(1);
    
    displayNews(articlesshow);
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container') ; 
    newsContainer.innerHTML = '';
    
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        const title = document.createElement('h2');
        title.textContent = article.title;
        
        if (article.imageUrl) {
            const image = document.createElement('img');
            image.src = article.imageUrl;
            image.alt = article.title;
            newsItem.appendChild(image);
        }
        const summary = document.createElement('p');
        summary.textContent = article.summary;
        
        const link = document.createElement('a');
        link.href = article.url;
        link.target = '_blank';
        link.textContent = 'View article';
        
        newsItem.appendChild(title);
        newsItem.appendChild(summary);
        newsItem.appendChild(link);
        
        newsContainer.appendChild(newsItem);
        
    });
}
fetchNews();

