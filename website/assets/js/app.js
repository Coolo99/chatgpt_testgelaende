document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is running');
    const calcLink = document.querySelector('a[href="../calculator/index.html"], a[href="../../calculator/index.html"]');
    if (calcLink) {
        calcLink.addEventListener('click', () => {
            console.log('Opening calculator');
        });
    }
});
