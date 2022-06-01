import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ApiContent } from '../api-content';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss'],
})
export class ListviewComponent implements OnInit {
  @Input() DoctorListMain: any;
  @Output() RegEvent: EventEmitter<ApiContent>;

  constructor(public api: ApiServiceService) {
    this.RegEvent = new EventEmitter<ApiContent>();
    this.DoctorListMain = [] as any;
  }
  DoctorsList: any = [];

  url = 'https://jsonplaceholder.typicode.com/users ';
  ngOnInit(): void {
    this.loadList();
  }
  loadList() {
    return this.api.getDoctors(this.url).subscribe((data) => {
      this.DoctorsList = data;
      this.sendEvent();
    });
  }

  sendEvent(): void {
    this.RegEvent.emit(this.DoctorsList);
  }
}
