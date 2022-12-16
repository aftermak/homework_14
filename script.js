
const sliderEl = document.getElementById('item').innerHTML;

class Slider {

    constructor (template) {

        this.i = 0;
        this.template = template;
        this.slider = document.getElementsByClassName('slider')[0];
        this.slider.insertAdjacentHTML('beforeend', this.template);

        this.itemList = document.getElementsByClassName('slider-item');

        this.itemNumber = document.getElementsByClassName('slider-number');
        this.itemTitle = document.getElementsByClassName('slider-title');
        this.itemDescription = document.getElementsByClassName('slider-description');

        this.item = document.getElementsByClassName('slider-item');
        this.item[this.i].classList.add('active');
        
    }

    getIndex () {
        Array.from(this.itemList)
            .forEach((element,index) => {
                this.itemNumber[index].innerText = index+1;
            });
    };

    showSlide () {
        this.itemList[this.i].classList.add('active');
    }

    hideSlide () {
        this.itemList[this.i].classList.remove('active');
    }

    getTitle (index, title, description) {
        this.itemTitle[index].innerText = title;
        this.itemDescription[index].innerText = description;
    }

    next() {
        this.hideSlide();
        this.i++;
        if (this.i == this.itemList.length) {
            this.i = 0;
        };
        this.showSlide();
    };

    previous() {
        this.hideSlide();
        if (this.i == 0) {
            this.i = this.itemList.length;
        };
        this.i--;
        this.showSlide();
    }

    last() {
        this.hideSlide();
        this.i = this.itemList.length - 1;
        this.showSlide ()
    }

    first() {
        this.hideSlide();
        this.i = 0;
        this.showSlide();
    }

    byIndex(index) {
        this.hideSlide();
        this.i = index;
        this.showSlide();
    }

    addSlide (title, description) {
        const index = this.itemList.length-1
        this.itemList[index].insertAdjacentHTML('afterend', this.template);
        this.getTitle(index, title, description)
        this.getIndex();
    }

    insertSlide (index, title, description) {
        if (index >= this.itemList.length){
            index = this.itemList.length-1
            this.itemList[index].insertAdjacentHTML('afterend', this.template);
            this.getTitle(index, title, description)
        } else {
            this.itemList[index].insertAdjacentHTML('beforebegin', this.template);
            this.getTitle(index, title, description)
        }

        this.getIndex();
        this.i++;
    }
}

const mySlider = new Slider(sliderEl);

