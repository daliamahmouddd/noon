import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(
    private _ban:BannerService
  ) { }
  sliders!:any;
  ngOnInit(): void {
    this.getBanner()
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 70,
    responsive: {
      0: {
        items: 1,
      },
      600:{
        items:1,
        // nav:false
    },
    1000:{
        items:1,
        // nav:true,
        // loop:false
    }
    },
    nav: true,
    navText: [
      "<div class='prev'><img src='../../../assets/Group 4886.svg'  class='img-fluid'></div>",
      "<div class='nex'><img src='../../../assets/Group 4888.svg' class='img-fluid' ></div>",
    ],
  };
  getBanner(){
    this.sliders=[]
    this._ban.getBanners().subscribe((res:any)=>{
      res[2].AdsSpacesprice.forEach((element:any) => {
        this.sliders.push(element.sliders.photo)
      });
      // console.log(this.sliders);
    })
  }

}
