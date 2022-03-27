import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentlyDisplayed=0;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  resetDisplay() {
    this.currentlyDisplayed=0;
  }

  generateDownloadJsonUri() {
    // @ts-ignore
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(localStorage.getItem('etuLists')));
    return uri;
  }
}
