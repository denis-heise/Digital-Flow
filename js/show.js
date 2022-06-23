const specialButton = document.querySelector('.container-content-sixth__button.special');
const order = document.querySelector('.mobile-version-order');
const arrowSpecialButton = specialButton.querySelector('.container-content-sixth__arrow.special')

const contactTitle = document.querySelector('.contact-title');
const blockContacts = document.querySelector('.block-mobile-contacts');
const arrowContactTitle = document.querySelector('.arrow-contact-title');

const buttonTopPage = document.querySelector('.button-top');

function showBlock (itemListening, itemBlock, itenArrow) {
    itemListening.addEventListener('click', function (evt) {
        evt.preventDefault();
        itemBlock.classList.toggle('active');
        itenArrow.classList.toggle('active');
        const orderActive = document.querySelector('.mobile-version-order.active');
        if (orderActive){
            blockContacts.classList.remove('active');
            arrowContactTitle.classList.remove('active');
            contactTitle.classList.add('not-show');
            arrowContactTitle.classList.add('not-show');
            buttonTopPage.classList.add('hidden');
        } else{
            contactTitle.classList.remove('not-show');
            arrowContactTitle.classList.remove('not-show');
            buttonTopPage.classList.remove('hidden');
        }
    })
}

showBlock(specialButton, order, arrowSpecialButton);
showBlock(contactTitle, blockContacts, arrowContactTitle);