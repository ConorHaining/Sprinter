import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _loading: boolean = true;
  stopAnimation: boolean = false;
  get loading() { return this._loading; }
  @Input() set loading(l) {
    this._loading = l;
    if (l) {
      this.stopAnimation = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

  animationIteration(event){
    if (!this.loading) {
      this.stopAnimation = true;
    } else {
      this.stopAnimation = false;
    }
  }

}
