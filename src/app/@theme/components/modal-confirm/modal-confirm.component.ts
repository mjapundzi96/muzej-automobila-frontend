import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal"

export interface ConfirmModel {
  title: string;
  message: string;
  button: string;
}

@Component({
  selector: 'ngx-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  button: string;
  constructor() {
    super()
  }

  ngOnInit(): void {
  }

  confirm() {
		// we set dialog result as true on click on confirm button,
		// then we can get dialog result from caller code
		this.result = true;
		this.close();
	}
}
