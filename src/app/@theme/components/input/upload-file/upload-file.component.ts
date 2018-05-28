import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploader: FileUploader;
  @Input() text: string;
  @Input() path = '';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.uploader = new FileUploader({ url: `http://localhost:3000/uploadfile`, itemAlias: 'file' });
    this.uploader.onBeforeUploadItem = ((item) => {
      item.withCredentials = false;
    });
    this.uploader.response.subscribe(res => {
      res = JSON.parse(res);
      this.value = res.data;
      this.valueChange.emit(this.value);
    });
  }
  upload() {
    this.uploader.uploadAll();
  }
  remove() {
    this.value = null;
    this.valueChange.emit(this.value);
  }
  get fileNotNull() {
    return this.value ? true : false;
  }
}
