import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Input() DoctorListMain: any;

  constructor() {
    this.DoctorListMain = [] as any;
  }

  ngOnInit(): void {}
  searchOutput: any = [];
  searchNotFound: any = [];

  name = new FormControl('', Validators.required);

  // searching algorithm
  searchAlgo(name: FormControl) {
    if (name.valid) {
      let checker = true;
      console.log(this.DoctorListMain);
      this.DoctorListMain.map((x: any) => {
        if (
          x.name
            .toLocaleLowerCase()
            .includes(this.name.value.toLocaleLowerCase()) ||
          x.username
            .toLocaleLowerCase()
            .includes(this.name.value.toLocaleLowerCase())
        ) {
          this.searchOutput.push(x);
          checker = false;
        } else {
        }
      });
      if (checker == true) {
        this.searchNotFound.push(1);
      }
    }
    this.name.reset();
  }

  // search on keypress
  search(event: any) {
    event.preventDefault();
    this.searchNotFound = [] as any;
    this.searchOutput = [] as any;
    console.log('resert');

    if (event.keyCode === 13) {
      this.searchAlgo(this.name);
    }
  }
}
