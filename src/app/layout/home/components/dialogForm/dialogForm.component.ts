import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'dialogForm',
  templateUrl: './dialogForm.component.html',
})
export class DialogFormComponent implements OnInit {
  @Input() currentData: any;
  @Input() type: any;
  @Output() dialogOk = new EventEmitter<any>();
  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      p1: [
        {
          value: this.currentData?.col1,
          disabled: this.type === '详情' ? true : false,
        },
      ],
      p2: [
        {
          value: this.currentData?.col2,
          disabled: this.type === '详情' ? true : false,
        },
      ],
      p3: [
        {
          value: this.currentData?.col3,
          disabled: this.type === '详情' ? true : false,
        },
      ],
      p4: [
        {
          value: this.currentData?.col4,
          disabled: this.type === '详情' ? true : false,
        },
      ],
      p5: [
        {
          value: this.currentData?.col5,
          disabled: this.type === '详情' ? true : false,
        },
      ],
      p6: [
        {
          value: this.currentData?.col6,
          disabled: this.type === '详情' ? true : false,
        },
      ],
    });
  }
  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.dialogOk.emit(this.validateForm.value);
  }
  resetForm(): void {
    this.validateForm.reset();
  }
}
