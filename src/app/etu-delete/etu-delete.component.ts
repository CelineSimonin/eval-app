import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-etu-delete',
  templateUrl: './etu-delete.component.html',
  styleUrls: ['./etu-delete.component.scss']
})
export class EtuDeleteComponent implements OnInit {
  @Output() update = new EventEmitter<boolean>();
  selectedList: any;
  selectedStudent: any;
  allExistingLists: any;
  allExistingListTitles: any;

  studentsSubList: any;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('etuLists')!=''){
      // @ts-ignore
      this.allExistingLists = JSON.parse(localStorage.getItem('etuLists'));
      // @ts-ignore
      this.allExistingListTitles = Object.keys(JSON.parse(localStorage.getItem('etuLists')));
    }
  }

  deleteEtudiant() {
    if(this.selectedList!='' && this.selectedStudent!=''){
      //delete this.allExistingLists[this.selectedList].etus[this.selectedStudent];
      this.allExistingLists[this.selectedList].etus.splice(this.selectedStudent,1)
      localStorage.setItem('etuLists',JSON.stringify(this.allExistingLists));
      this.update.emit(true);
    }
  }

  getStudents() {
    this.studentsSubList = [];
    this.allExistingLists[this.selectedList].etus.forEach((elt: { prenom: string; nom: string; })=>{
      this.studentsSubList.push(elt.prenom+" "+elt.nom);
    });
  }
}
