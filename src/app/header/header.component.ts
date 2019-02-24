import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() loading: boolean = true;
  stopAnimation: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  animationIteration(event){
    if(!this.loading) {
      this.stopAnimation = true;
    }
  }

}
