import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-littleTable',
  templateUrl: './littleTable.component.html',
})
export class LittleTableComponent implements OnInit {
  listOfParentData: any[] = [];
  listOfChildrenData: any[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        name: 'name',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2023-08-14',
        expand: false,
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2023-08-14',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
  }
}
