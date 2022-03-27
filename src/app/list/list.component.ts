import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() selectedStudent = new EventEmitter<{'list' : number, 'student': number}>();
  @Output() resetStudent = new EventEmitter<any>();

  allExistingLists: any;

  allListTitles:any;
  selectedList: any;

  studentsSubList: any;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('etuLists')!=''){
      // @ts-ignore
      this.allExistingLists = JSON.parse(localStorage.getItem('etuLists'));
      // @ts-ignore
      this.allListTitles = Object.keys(JSON.parse(localStorage.getItem('etuLists')));
    }
  }

  getStudents() {
    this.studentsSubList = [];
    this.allExistingLists[this.selectedList].etus.forEach((elt: { prenom: string; nom: string; })=>{
      this.studentsSubList.push(elt.prenom+" "+elt.nom);
    });
    this.resetStudent.emit();
  }

}
