import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-page',
  templateUrl: './journey-page.component.html',
  styleUrls: ['./journey-page.component.css']
})
export class JourneyPageComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onLoading(event){
    this.loading = event;
  }

}
