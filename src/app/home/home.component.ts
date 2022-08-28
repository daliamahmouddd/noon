import { Component, OnInit } from '@angular/core';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _home:BannerService) { }
  sliders!:any;
    rate!: number;

  ngOnInit(): void {
    this.getHome()
  }
  getHome(){
    this.sliders=[]
    this._home.getHomeContnt().subscribe((res:any)=>{
    var data={
      amount:0,
      name:'',
      photo:'',
      des:''
    }
      res.MostSellItems.data.forEach((element:any) => {
        // console.log(element);
        data={
          amount:element.itemamount,
          name:element.menu_categories_items.name_en,
          photo:element.menu_categories_items.photo,
          des:element.menu_categories_items.descriptions_en
        }
        this.sliders.push(data)
      });
      // console.log(this.sliders);
    })
  }
}
