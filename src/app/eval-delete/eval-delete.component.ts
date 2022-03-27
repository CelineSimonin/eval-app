import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-eval-delete',
  templateUrl: './eval-delete.component.html',
  styleUrls: ['./eval-delete.component.scss']
})
export class EvalDeleteComponent implements OnInit {
  selectedEval:any;
  allExistingEvals : any;
  allExistingEvalTitles : any;
  @Output() update = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('allEvals')!=''){
      // @ts-ignore
      this.allExistingEvals = JSON.parse(localStorage.getItem('allEvals'));
      // @ts-ignore
      this.allExistingEvalTitles = Object.keys(JSON.parse(localStorage.getItem('allEvals')));
    }
  }

  deleteEval() {
    if(this.selectedEval!=undefined){
      if(this.selectedEval!=''){
        delete this.allExistingEvals[this.selectedEval];
        localStorage.setItem('allEvals',JSON.stringify(this.allExistingEvals));
        this.update.emit(true);
      }
    }
  }
}
