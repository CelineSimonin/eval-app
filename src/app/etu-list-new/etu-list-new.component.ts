import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-etu-list-new',
  templateUrl: './etu-list-new.component.html',
  styleUrls: ['./etu-list-new.component.scss']
})
export class EtuListNewComponent implements OnInit {
  newListName: any;
  arrayEtuLists: any = {};
  @Output() update = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('etuLists')!=''){
      // @ts-ignore
      let jsonEtuLists: string = localStorage.getItem('etuLists');
      this.arrayEtuLists = JSON.parse(jsonEtuLists);
    } else{
      this.arrayEtuLists = {};
    }

  }

  createList() {
    if(this.newListName!=undefined){
      if(this.arrayEtuLists[this.newListName] == undefined){
        this.arrayEtuLists[this.newListName] = {'etus':[]};
        localStorage.setItem('etuLists',JSON.stringify(this.arrayEtuLists));
        this.update.emit(true);
      }
    }
  }
}
