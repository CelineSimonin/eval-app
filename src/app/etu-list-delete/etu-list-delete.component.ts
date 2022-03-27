import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-etu-list-delete',
  templateUrl: './etu-list-delete.component.html',
  styleUrls: ['./etu-list-delete.component.scss']
})
export class EtuListDeleteComponent implements OnInit {
  selectedList:any;
  allExistingLists : any;
  allExistingListTitles : any;
  @Output() update = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('etuLists')!=''){
      // @ts-ignore
      this.allExistingLists = JSON.parse(localStorage.getItem('etuLists'));
      // @ts-ignore
      this.allExistingListTitles = Object.keys(JSON.parse(localStorage.getItem('etuLists')));
    }
  }

  deleteList() {
    if(this.selectedList!=undefined){
      if(this.selectedList!=''){
        delete this.allExistingLists[this.selectedList];
        localStorage.setItem('etuLists',JSON.stringify(this.allExistingLists));
        this.update.emit(true);
      }
    }
  }
}
