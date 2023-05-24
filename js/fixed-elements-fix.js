let topMenuHeight = document.querySelector('.list-header').offsetHeight;
let asideMenuWidth = document.querySelector('.desktop-page-nav').offsetWidth;

let mainContent = document.querySelector('.item-overview-container');
let mainContentWidth = Math.abs(window.innerWidth - asideMenuWidth);
let headerHeight = topMenuHeight + document.querySelector('.mobile-page-nav').offsetHeight;

mainContent.style.width = mainContentWidth + 'px';
mainContent.style.marginLeft = asideMenuWidth + 'px';
mainContent.style.marginTop = headerHeight + 'px';

document.querySelector('.desktop-page-nav').style.top = topMenuHeight + 'px';

document.querySelector('.mobile-page-nav').style.top = topMenuHeight + 'px';

window.addEventListener('resize', function() {
    let topMenuHeight = document.querySelector('.list-header').offsetHeight;
    let asideMenuWidth = document.querySelector('.desktop-page-nav').offsetWidth;

    let mainContent = document.querySelector('.item-overview-container');
    let mainContentWidth = Math.abs(window.innerWidth - asideMenuWidth);
    let headerHeight = topMenuHeight + document.querySelector('.mobile-page-nav').offsetHeight;

    mainContent.style.width = mainContentWidth + 'px';
    mainContent.style.marginLeft = asideMenuWidth + 'px';
    mainContent.style.marginTop = headerHeight + 'px';

    document.querySelector('.desktop-page-nav').style.top = topMenuHeight + 'px';

    document.querySelector('.mobile-page-nav').style.top = topMenuHeight + 'px';
});