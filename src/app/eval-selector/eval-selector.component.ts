import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-eval-selector',
  templateUrl: './eval-selector.component.html',
  styleUrls: ['./eval-selector.component.scss']
})
export class EvalSelectorComponent implements OnInit {
  @Output() selectedEvalEvent= new EventEmitter<number>();

  allExistingEvalTitles : any;
  selectedEval: any;


  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('allEvals')!=''){
      // @ts-ignore
      this.allExistingEvals = JSON.parse(localStorage.getItem('allEvals'));
      // @ts-ignore
      this.allExistingEvalTitles = Object.keys(JSON.parse(localStorage.getItem('allEvals')));
    }
  }

  selectEval() {
    this.selectedEvalEvent.emit(this.selectedEval)
  }
}
