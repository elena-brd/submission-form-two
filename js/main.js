const button = document.querySelector('.btn');
const content = document.querySelector('.content');

button.addEventListener('click', (e) => {
    console.log('click');

    content.innerHTML = '<h3>This page is not available at the moment</h3> <p>This may be because of a technical error that we are working to get fixed. Try reloading this page</p>'

})



