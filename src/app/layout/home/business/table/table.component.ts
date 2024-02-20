import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from 'src/app/core/business.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @ViewChild('form') form: any;
  arr = Array;
  listOfData: any;
  menuId = 1;
  isDelVisible = false;
  isFormVisible = false;
  dialogTitle = '';
  currentData: any;
  constructor(
    private businessService: BusinessService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.menuId = this.route.snapshot.queryParams['id'];
    // console.log('menuId', this.menuId);
    this.getData();
  }
  getData(): void {
    this.businessService.getData().subscribe((res: any) => {
      this.listOfData = res.data;
    });
  }
  search(e: any): void {
    if (e.search1) {
      this.listOfData = this.listOfData.filter((res: any) => {
        return res.id == e.search1;
      });
    } else {
      this.getData();
    }
  }
  del(data: any): void {
    this.isDelVisible = true;
    this.currentData = data;
  }
  delOk() {
    this.isDelVisible = false;
    this.businessService.delData().subscribe(() => {
      this.listOfData = this.listOfData.filter((res: any) => {
        return res.id !== this.currentData.id;
      });
    });
  }
  detail(data: any): void {
    this.isFormVisible = true;
    this.currentData = data;
    this.dialogTitle = '详情';
  }
  add(): void {
    this.isFormVisible = true;
    this.dialogTitle = '新增';
    this.currentData = null;
  }
  edit(data: any): void {
    this.isFormVisible = true;
    this.dialogTitle = '编辑';
    this.currentData = data;
  }
  handleOk(): void {
    if (this.dialogTitle == '编辑') {
      const index = this.listOfData.findIndex(
        (res: any) => res.id == this.currentData.id
      );
      const obj = {
        id: this.currentData.id,
        name: `第${this.currentData.id}行`,
        col1: this.form.validateForm.value.p1,
        col2: this.form.validateForm.value.p2,
        col3: this.form.validateForm.value.p3,
        col4: this.form.validateForm.value.p4,
        col5: this.form.validateForm.value.p5,
        col6: this.form.validateForm.value.p6,
        col7: '',
        col8: '',
        col9: '',
        col10: '',
        col11: '',
        col12: '',
      };
      this.listOfData[index] = obj;
      this.listOfData = [...this.listOfData];
    } else if (this.dialogTitle == '新增') {
      const obj = {
        id: this.listOfData.length + 1,
        name: `第${this.listOfData.length + 1}行`,
        col1: this.form.validateForm.value.p1,
        col2: this.form.validateForm.value.p2,
        col3: this.form.validateForm.value.p3,
        col4: this.form.validateForm.value.p4,
        col5: this.form.validateForm.value.p5,
        col6: this.form.validateForm.value.p6,
        col7: '',
        col8: '',
        col9: '',
        col10: '',
        col11: '',
        col12: '',
      };
      this.listOfData = [obj, ...this.listOfData];
    }
    console.log('this.listOfData', this.listOfData);
    this.cancel();
  }
  cancel(): void {
    this.isFormVisible = false;
  }
}
