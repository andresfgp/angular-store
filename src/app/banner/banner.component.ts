import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[]=[
    'assets/static/banner-1.jpg',
    'assets/static/banner-2.jpg',
    'assets/static/banner-3.jpg',
  ]

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    //code
  }

}
