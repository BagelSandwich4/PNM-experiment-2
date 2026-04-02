const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', function () {
    paragraph.textContent = 'Button was clicked!';
});