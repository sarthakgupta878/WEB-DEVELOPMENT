// console.log("hi")

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    e.target.className += ' hold';
    setTimeout(() => {

        e.target.className = 'hide';
    }, 0);
});
imgBox.addEventListener('dragend', (e) => {

    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('dragover');


    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('dragenter');
        e.target.className += ' dashed';

    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('dragleave');
        e.target.className = ' whiteBox';

    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop');

        e.target.append(imgBox);
    });
}
