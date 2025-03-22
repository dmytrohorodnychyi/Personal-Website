function showPage(pageId) {
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    
    window.location.hash = pageId; 
}


window.onload = () => {
    const hash = window.location.hash.substring(1); 
    if (hash) {
        showPage(hash); 
    } else {
        showPage('home'); 
    }
};


window.onhashchange = () => {
    const hash = window.location.hash.substring(1); 
    showPage(hash); 
}