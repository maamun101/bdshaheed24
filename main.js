function toggleText(element) {
    const textContainer = element.parentElement;
    const moreText = textContainer.querySelector('.more-text');
    const dot = textContainer.querySelector('.dots');

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        element.textContent = 'Read less';
        dot.style.display = 'none';
    } else {
        moreText.style.display = 'none';
        element.textContent = 'Read more';
        dot.style.display = 'inline';
    }
}