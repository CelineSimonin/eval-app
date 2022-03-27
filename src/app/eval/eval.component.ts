import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-eval',
  templateUrl: './eval.component.html',
  styleUrls: ['./eval.component.scss']
})
export class EvalComponent implements OnInit {
  selectedList:any;
  selectedStudent:any;
  selectedEval:any;

  constructor() { }

  ngOnInit(): void {
  }

  evaluatedStudent(selection: any) {
    this.selectedList = selection.list;
    this.selectedStudent = selection.student;
  }

  evaluatedEval(selection: any) {
    this.selectedEval = selection;
  }

  reloadPage() {
    window.location.reload();
  }
}
