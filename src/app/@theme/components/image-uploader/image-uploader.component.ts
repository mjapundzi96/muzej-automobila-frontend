import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../../../@core/utils/helpers';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  @Input() image: string;
  @Output() onChange = new EventEmitter<string>()
  @Output() onRemove = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  async onImageChange(e){
    const file = e.target.files[0];
    if (file){
      const image64 = await toBase64(file) as string;
      this.onChange.emit(image64)
    }
    
  }

  onImageRemove(e: Event){
    e.stopPropagation()
    this.onRemove.emit()
  }
}
