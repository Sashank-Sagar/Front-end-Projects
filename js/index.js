const tabItems = document.querySelectorAll('.tabItems');
const tabContentItems = document.querySelectorAll('.tabContentItem');

function selectItem(e){
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tabBorder');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tabBorder'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));



