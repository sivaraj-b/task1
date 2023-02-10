import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  showMe : boolean =true;
  
  toggleTag(){
    this.showMe=!this.showMe;
    console.log(this.showMe);
    return this.showMe;
  }
}
