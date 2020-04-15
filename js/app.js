const htmlElements = {
    mainContent : document.querySelector('.main'),
    backToTop : document.querySelector('.goUp'),
    mobileMenu : document.querySelector('.mobileIcon'),
    blockLinks : document.querySelector('.linksOtherPages'),
    returnCallModalWindow : document.querySelector('.modalReturnCall'),
    returnCall : document.querySelector('.returnCall'),
    closeReturnCallWindow : document.querySelector('.closeModalReturnCall button'),
    generContacts : document.querySelector('.pageContacts'),
    generServices : document.querySelector('.pageServices'),
    generPortfolio : document.querySelector('.pagePortfolio'),
    generReviews : document.querySelector('.pageReviews'),
    generMainPage : document.querySelector('.linkMainPage'),
    generContactsFromFooter : document.querySelector('.generContactsFromFooter'),
    generServicesFromFooter : document.querySelector('.generServicesFromFooter'),
    generPortfolioFromFooter : document.querySelector('.generPortfolioFromFooter'),
    generReviewsFromFooter : document.querySelector('.generReviewsFromFooter'),
    generMainPageFromFooter : document.querySelector('.generMainPageFromFooter'),
};


const someVariables = {
    link : 'js/pages.json',
    check : 0,
    positionTop : '',
    posModalOpenTop : -100,
    posModalOpenLeft : -50,
    posModalCloseTop : 0,
    posModalCloseLeft : 0,
}


const scrol = window.addEventListener('scroll', () => {
    pageYOffset > 300 ? htmlElements.backToTop.style.bottom = 20 + 'px' : htmlElements.backToTop.style.bottom = -120 + 'px';
});


const pages = function htmlPages(params){
    fetch(someVariables.link).then((text) => {return text.json()}).then((data) => {
        while (htmlElements.mainContent.firstChild) {
            htmlElements.mainContent.firstChild.remove();
        }
        htmlElements.mainContent.innerHTML = data[params];
    });
}


const buttonTop = function backToTopPage(){
    let posY = Math.floor(pageYOffset);
    let toTop = setInterval(() => {
        posY < 40 ? posY -- : posY -= 35;
        window.scrollTo(pageXOffset, posY);
        posY === 0 ? clearInterval(toTop) : '';
    }, 10);
}


const mobile = function positionMobileMenu(){
    someVariables.check % 2 === 0 ? someVariables.positionTop = -200 : someVariables.positionTop = 50;
    let position = setInterval(() => {
        someVariables.check % 2 === 0 ? someVariables.positionTop += 10 : someVariables.positionTop -= 10;
        htmlElements.blockLinks.style.top = someVariables.positionTop + 'px';
        if(someVariables.positionTop === 50 || someVariables.positionTop === -200){
            clearInterval(position);
            someVariables.check ++ ;
        }
    }, 15);
}


const modal = function modalWindovReturnCall(value){
    if(value === 'openWindow'){
        let positionOpenModal = setInterval(() => {
            someVariables.posModalOpenTop === 0 ? someVariables.posModalOpenLeft += 2 : someVariables.posModalOpenTop += 2;
            htmlElements.returnCallModalWindow.style.top = someVariables.posModalOpenTop + '%';
            htmlElements.returnCallModalWindow.style.left = someVariables.posModalOpenLeft + '%';
            if(someVariables.posModalOpenTop === 0 && someVariables.posModalOpenLeft === 0){
                clearInterval(positionOpenModal);
                someVariables.posModalCloseTop = 0;
                someVariables.posModalCloseLeft = 0;
            }
        }, 7.5);
    }else{
        let positionCloseModal = setInterval(() => {
            someVariables.posModalCloseLeft === 50 ? someVariables.posModalCloseTop -= 2 : someVariables.posModalCloseLeft += 2;
            htmlElements.returnCallModalWindow.style.top = someVariables.posModalCloseTop + '%';
            htmlElements.returnCallModalWindow.style.left = someVariables.posModalCloseLeft + '%';
            if(someVariables.posModalCloseLeft === 50 && someVariables.posModalCloseTop === -100){
                clearInterval(positionCloseModal);
                someVariables.posModalOpenLeft = -50;
                someVariables.posModalOpenTop = -100;
            }
        }, 7.5);
    }
}


htmlElements.generContacts.addEventListener('click', () => {pages('contacts')});
htmlElements.generPortfolio.addEventListener('click', () => {pages('portfolio')});
htmlElements.generReviews.addEventListener('click', () => {pages('reviews')});
htmlElements.generServices.addEventListener('click', () => {pages('services')});
htmlElements.generMainPage.addEventListener('click', () => {pages('mainPage')})

htmlElements.generContactsFromFooter.addEventListener('click', () => {pages('contacts')});
htmlElements.generPortfolioFromFooter.addEventListener('click', () => {pages('portfolio')});
htmlElements.generReviewsFromFooter.addEventListener('click', () => {pages('reviews')});
htmlElements.generServicesFromFooter.addEventListener('click', () => {pages('services')});
htmlElements.generMainPageFromFooter.addEventListener('click', () => {pages('mainPage')});

htmlElements.backToTop.addEventListener('click', buttonTop);
htmlElements.mobileMenu.addEventListener('click', mobile);
htmlElements.returnCall.addEventListener('click', () => {modal('openWindow')});
htmlElements.closeReturnCallWindow.addEventListener('click', () => {modal('closeWindow')});