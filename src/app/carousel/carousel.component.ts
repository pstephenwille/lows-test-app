import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ImageService} from "../services/image.service";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [ImageService]
})
export class CarouselComponent implements OnInit {
  @ViewChildren('bgImages') bgImg: QueryList<any>;

  hotelImages;
  numberOfHotelImages;
  currentImageNum = 1;
  startPrevImgCarousel;
  startNextImgCarousel;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.hotelImages = this.imageService.getHotelImageData();
    this.numberOfHotelImages = this.hotelImages.length;
    this.currentImageNum = this.numberOfHotelImages;
  }


  parseImgNumFromUrlString(url) {
    return parseInt(url.match(/\d/)[0], 10);
  }

  getPrevImage() {
    if (this.startPrevImgCarousel === false) return;

    let nextImg = this.hotelImages.shift();
    let prevDisplayedImg = this.bgImg.first;
    let displayedImg = this.bgImg.last;

    prevDisplayedImg.nativeElement.style.left = '100%';
    this.hotelImages.push(nextImg);



    requestAnimationFrame(this.doPrevImageAnimation.bind(this, nextImg, prevDisplayedImg, displayedImg));

    this.currentImageNum = (--this.currentImageNum < 1) ? this.numberOfHotelImages : this.currentImageNum;
  }

  doPrevImageAnimation(img, element, displayedImg) {
    this.startPrevImgCarousel = false;
    let step = 100;
    let stepR = 0;

    let timerId = setInterval(() => {
      step -= 5;
      stepR += 5;
      element.nativeElement.style.left = step + '%';
      displayedImg.nativeElement.style.right = stepR + '%';

      if (element.nativeElement.style.left == '0%') {
        clearInterval(timerId);
        element.nativeElement.style.left = 'unset';
        displayedImg.nativeElement.style.right = 'unset';
        this.startPrevImgCarousel = true;
      }
    }, 20);
  }

  getNextImage() {
    if (this.startNextImgCarousel === false) return;

    let displayedImg = this.bgImg.last;
    let displayedImgNum = this.parseImgNumFromUrlString(displayedImg.nativeElement.style.backgroundImage);
    let nextImg;
    let nextImgNum = (displayedImgNum - 1 < 1) ? 3 : displayedImgNum - 1;

    this.bgImg.forEach(item => {
      if (this.parseImgNumFromUrlString(item.nativeElement.style.backgroundImage) == nextImgNum) {
        nextImg = item;
        nextImg.nativeElement.style.right = '100%';
      }
    });

    requestAnimationFrame(this.doNextImageAnimation.bind(this, nextImg));

    this.currentImageNum = (++this.currentImageNum > this.numberOfHotelImages) ? 1 : this.currentImageNum;
  }


   doNextImageAnimation(nextImg) {
    this.startNextImgCarousel = false;

    let element = this.bgImg.last;
    let step = 0;
    let stepR = 100;

    let timerId = setInterval(() => {
      step += 5;
      stepR -= 5;
      element.nativeElement.style.left = step + '%';
      nextImg.nativeElement.style.right = stepR + '%';

      if (element.nativeElement.style.left == '100%') {
        clearInterval(timerId);
        element.nativeElement.style.left = 'unset';
        nextImg.nativeElement.style.right = 'unset';
        this.hotelImages.unshift(this.hotelImages.pop());
        this.startNextImgCarousel = true;
      }
    }, 20);
  }

  makeImageUrlString(index) {
    return 'url(' + this.hotelImages[index].url + ')';
  }
}
