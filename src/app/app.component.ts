import { Component } from '@angular/core';
import { ApiContent } from './api-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp';
  user = {
    people: 'yes',
  };
  DoctorsListMain: any = [];

  // event handlers
  handleEvent(event: ApiContent) {
    this.DoctorsListMain = event;
  }
  handleNewDoctor(event: ApiContent) {
    this.DoctorsListMain.push(event);
  }
  ngOnInit() {}
}
