import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-alt-all';

  constructor(private router: Router){}
  dynamicRow(){
  this.router.navigate(['/dynamic-row-add'])
  }
  dynamicScroll(){
    this.router.navigate(['/dynamic-scroll'])
    }
}
