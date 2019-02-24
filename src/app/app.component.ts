import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sprinter';
  loading: boolean = false;

  onLoading(event: boolean){
    this.loading = event;
    console.log(event);
  }

  onActivate(event: boolean){
    this.loading = event;
    console.log(event);
  }

  onDeactivate(event: boolean){
    this.loading = event;
    console.log(event);
  }
}
