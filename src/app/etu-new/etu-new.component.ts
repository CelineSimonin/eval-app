import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-etu-new',
  templateUrl: './etu-new.component.html',
  styleUrls: ['./etu-new.component.scss']
})
export class EtuNewComponent implements OnInit {
  allExistingLists : any;
  allExistingListTitles : any;

  selectedList: any;
  prenomNewEtu: any;
  nomNewEtu: any;
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

  addEtu() {
    if(this.prenomNewEtu!=undefined && this.nomNewEtu!=undefined && this.selectedList!=undefined){
      if(this.prenomNewEtu!='' && this.nomNewEtu!='' && this.selectedList!=''){
        this.allExistingLists[this.selectedList].etus.push({'nom':this.nomNewEtu,'prenom':this.prenomNewEtu, 'evals':{}});
        localStorage.setItem('etuLists',JSON.stringify(this.allExistingLists));
        this.update.emit(true);
      }
    }
  }
}
