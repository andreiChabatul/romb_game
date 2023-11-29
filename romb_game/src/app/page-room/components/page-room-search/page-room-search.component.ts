import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputTextFormOption } from 'src/app/types/components';

@Component({
  selector: 'app-page-room-search',
  templateUrl: './page-room-search.component.html',
  styleUrls: ['./page-room-search.component.scss']
})
export class PageRoomSearchComponent {

  inputForm: InputTextFormOption = { nameForm: 'searchRoom', type: 'text' }
    
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.searchForm = this.fb.group({});
  }

 

  onSubmit() {
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched()
      return;
    }
   
  }


}
