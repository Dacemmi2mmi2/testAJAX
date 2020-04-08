const htmlElements = {
    mainContent: document.querySelector('.main'),
    generContacts: document.querySelector('.generContacts'),
    generServices: document.querySelector('.generServices'),
    generPortfolio: document.querySelector('.generPortfolio'),
    generReviews: document.querySelector('.generReviews'),
    generMainPage: document.querySelector('.generMainPage'),
    generContactsFromFooter: document.querySelector('.generContactsFromFooter'),
    generServicesFromFooter: document.querySelector('.generServicesFromFooter'),
    generPortfolioFromFooter: document.querySelector('.generPortfolioFromFooter'),
    generReviewsFromFooter: document.querySelector('.generReviewsFromFooter'),
    generMainPageFromFooter: document.querySelector('.generMainPageFromFooter'),
    generContactsFromMobile: document.querySelector('.generContactsFromMobile'),
    generServicesFromMobile: document.querySelector('.generServicesFromMobile'),
    generPortfolioFromMobile: document.querySelector('.generPortfolioFromMobile'),
    generReviewsFromMobile: document.querySelector('.generReviewsFromMobile'),
};


const pages = function htmlPages(params){
    let link = 'js/pages.json';

    fetch(link).then((text) => {return text.json()}).then((data) => {
        // console.log(data[params]);
        while (htmlElements.mainContent.firstChild) {
            htmlElements.mainContent.firstChild.remove();
        }
        htmlElements.mainContent.innerHTML = data[params];
    });
}


htmlElements.generContacts.addEventListener('click', ()=>{pages('contacts')});
htmlElements.generPortfolio.addEventListener('click', ()=>{pages('portfolio')});
htmlElements.generReviews.addEventListener('click', ()=>{pages('reviews')});
htmlElements.generServices.addEventListener('click', ()=>{pages('services')});
htmlElements.generMainPage.addEventListener('click', ()=>{pages('mainPage')});

htmlElements.generContactsFromFooter.addEventListener('click', ()=>{pages('contacts')});
htmlElements.generPortfolioFromFooter.addEventListener('click', ()=>{pages('portfolio')});
htmlElements.generReviewsFromFooter.addEventListener('click', ()=>{pages('reviews')});
htmlElements.generServicesFromFooter.addEventListener('click', ()=>{pages('services')});
htmlElements.generMainPageFromFooter.addEventListener('click', ()=>{pages('mainPage')});

htmlElements.generContactsFromMobile.addEventListener('click', ()=>{pages('contacts')});
htmlElements.generPortfolioFromMobile.addEventListener('click', ()=>{pages('portfolio')});
htmlElements.generReviewsFromMobile.addEventListener('click', ()=>{pages('reviews')});
htmlElements.generServicesFromMobile.addEventListener('click', ()=>{pages('services')});
