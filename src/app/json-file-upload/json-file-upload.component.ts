import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-json-file-upload',
  templateUrl: './json-file-upload.component.html',
  styleUrls: ['./json-file-upload.component.scss']
})
export class JsonFileUploadComponent {
  @Output() update = new EventEmitter<boolean>();

  selectedFile: File | undefined
  content:any

  onFileChanged(event: Event) {
    // @ts-ignore
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    // @ts-ignore
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        console.log(JSON.parse(fileReader.result));
        this.content=JSON.parse(fileReader.result);
      }
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  onUpload() {
    localStorage.setItem('etuLists',JSON.stringify(this.content));
    this.update.emit(true);
  }

}
