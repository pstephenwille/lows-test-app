import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarouselComponent} from './carousel.component';
import {deepEqual} from "assert";
import {ImageService} from "../services/image.service";
import {DebugElement} from "@angular/core";
import {WebdriverBy} from "protractor/built/locators";
import {By} from "@angular/platform-browser";

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let serviceSpy;
  let debugELement: DebugElement;
  let imgService;
  let prevBtn;
  let nextBtn;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    debugELement = fixture.debugElement;
    imgService = debugELement.injector.get(ImageService);

    serviceSpy = spyOn(imgService, 'getHotelImageData').and.returnValue([
      {name: 'hotel-1', url: '/stubbed/hotel-1.jpg'},
      {name: 'hotel-2', url: '/stubbed/hotel-2.jpg'},
      {name: 'hotel-3', url: '/stubbed/hotel-3.jpg'},
    ]);

    fixture.detectChanges();
  }));


  it('getPrevImage() reduces currentImageNum by 1', () => {
    component.getPrevImage();
    expect(component.currentImageNum).toEqual(2);
  });

  it('getNextImage() increases currentImageNum by 1', () => {
    component.getNextImage();
    expect(component.currentImageNum).toEqual(1);
  });

  it('makeImageUrlString() returns the correct background image url string', () => {
    let actualString = component.makeImageUrlString(0);
    let expectedString = 'url(/stubbed/hotel-1.jpg)';

    expect(actualString).toEqual(expectedString);
  });

  it('clicking the carasouel\'s prev button changes the background image', (done) => {
    const el = debugELement.query(By.css('button.left'));
    el.nativeElement.click();
    setTimeout(()=>{
      expect(component.hotelImages.pop().url).toEqual('/stubbed/hotel-1.jpg');
      done();
    }, 1000);
  });

  it('clicking the carasouel\'s next button changes the background image', (done) => {
    const el = debugELement.query(By.css('button.right'));
    el.nativeElement.click();
    setTimeout(()=>{
      expect(component.hotelImages.pop().url).toEqual('/stubbed/hotel-2.jpg');
      done();
    }, 1000);
  });
});
