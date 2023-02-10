import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  subjects=['Angular JS','Node JS','React JS'];
  userModel = new User('Siva','Raj','test@test.com','6383','657','735','','Hello All');

}
