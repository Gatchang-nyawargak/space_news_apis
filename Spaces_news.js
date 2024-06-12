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
    const newsContainer = document.getElementById('news-container');
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

// document.addEventListener('DOMContentLoaded', () => {
//     const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles/';
//     const newsContainer = document.getElementById('news-container');
//     const filterOptions = document.getElementById('filter-options');
//     const pagination = document.createElement('div');
//     pagination.id = 'pagination';
//     document.body.appendChild(pagination);

//     let currentPage = 1;
//     const limit = 10;
//     let totalPages = 0;

//     async function fetchNews(query = '', page = 1) {
//         let url = `${API_URL}?limit=${limit}&offset=${(page - 1) * limit}`;
//         if (query) {
//             url += `&search=${query}`;
//         }

//         const response = await fetch(url);
//         const data = await response.json();

//         totalPages = Math.ceil(data.count / limit);
//         displayNews(data.results);
//         setupPagination();
//     }

//     function displayNews(articles) {
//         newsContainer.innerHTML = '';

//         articles.forEach(article => {
//             const newsItem = document.createElement('div');
//             newsItem.classList.add('news-item');

//             newsItem.innerHTML = `
//                 <img src="${article.image_url}" alt="${article.title}">
//                 <h2>${article.title}</h2>
//                 <p>${article.summary}</p>
//                 <a href="${article.url}" target="_blank">Read more</a>
//             `;

//             newsContainer.appendChild(newsItem);
//         });
//     }

//     function setupPagination() {
//         pagination.innerHTML = '';

//         const pageGroup = Math.ceil(currentPage / 10);
//         const lastPage = pageGroup * 10;
//         const firstPage = lastPage - 9;

//         const createArrow = (text, isEnabled, onClick) => {
//             const arrow = document.createElement('button');
//             arrow.textContent = text;
//             arrow.classList.add('page-arrow');
//             if (!isEnabled) {
//                 arrow.disabled = true;
//             } else {
//                 arrow.addEventListener('click', onClick);
//             }
//             return arrow;
//         };

//         pagination.appendChild(createArrow('«', firstPage > 1, () => {
//             currentPage = firstPage - 10;
//             fetchNews('', currentPage);
//         }));

//         for (let i = firstPage; i <= Math.min(lastPage, totalPages); i++) {
//             createPageLink(i);
//         }

//         pagination.appendChild(createArrow('»', lastPage < totalPages, () => {
//             currentPage = lastPage + 1;
//             fetchNews('', currentPage);
//         }));
//     }

//     function createPageLink(page) {
//         const pageLink = document.createElement('button');
//         pageLink.textContent = page;
//         pageLink.classList.add('page-link');
//         if (page === currentPage) {
//             pageLink.classList.add('active');
//         }
//         pageLink.addEventListener('click', () => {
//             currentPage = page;
//             fetchNews('', currentPage);
//         });
//         pagination.appendChild(pageLink);
//     }

//     filterOptions.addEventListener('click', (event) => {
//         if (event.target.tagName === 'LI') {
//             const query = event.target.getAttribute('data-topic');
//             currentPage = 1;  // Reset to the first page when applying a filter
//             fetchNews(query, currentPage);

//             document.querySelectorAll('#filter-options li').forEach(li => {
//                 li.classList.remove('active');
//             });
//             event.target.classList.add('active');
//         }
//     });

//     fetchNews();  // Fetch news on initial load
// });