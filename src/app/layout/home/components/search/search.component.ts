import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter();
  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      search1: [null],
      search2: [null],
      search3: [null],
      search4: [null],
    });
  }
  submitForm(): void {
    this.search.emit(this.validateForm.value);
    this.validateForm.reset();
  }
}
