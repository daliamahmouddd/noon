import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private _cat:BannerService
  ) { }
  sliders!:any;

  ngOnInit(): void {
    this.getAllCat()

  }

  getAllCat()
  {
    this.sliders=[]
    this._cat.getCat().subscribe((res:any)=>{
      // console.log(res);
      var data={}
    res.forEach((element:any) => {
      data={
        name :element.name_en,
        photo:element.photo
      }
      this.sliders.push(data)
    });
    console.log(this.sliders);
  })
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
        items:5,
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
}
