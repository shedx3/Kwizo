import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor( private scroller: ViewportScroller, private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  scrollToCategory(){
    this.scroller.scrollToAnchor("footer")
  }

}
