import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.scss']
})
export class EvaluatorComponent implements OnInit, OnChanges {
  @Input() list: any;
  @Input() studentIndex: any;
  @Input() eval: any;

  allEvals: any;
  students: any;
  student: any;

  evalsObjectList: any;

  canDetectChanges = false;

  constructor(private changeDetection: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.canDetectChanges){
      if(changes['studentIndex']!=undefined){
        // @ts-ignore
        this.student = JSON.parse(localStorage.getItem('etuLists'))[this.list].etus[this.studentIndex];
        this.bindEvalToStudent();
        this.changeDetection.detectChanges();
      }
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('allEvals')!=''){
      // @ts-ignore
      this.evalsObjectList = JSON.parse(localStorage.getItem('allEvals'));
      // @ts-ignore
      this.allEvals = Object.keys(JSON.parse(localStorage.getItem('allEvals')));
    }
    if(localStorage.getItem('etuLists')!=''){
      // @ts-ignore
      this.students = JSON.parse(localStorage.getItem('etuLists'))[this.list].etus;
      // @ts-ignore
      this.student = JSON.parse(localStorage.getItem('etuLists'))[this.list].etus[this.studentIndex];
      this.bindEvalToStudent();
    }
    this.canDetectChanges=true;
    setInterval(()=>{
      document.querySelectorAll('.criteriaIndicator').forEach((elt)=>{
        // @ts-ignore
        let selector = '.criteriaInput'+parseInt(elt.getAttribute('id'));
        // @ts-ignore
        elt.innerHTML = document.querySelector(selector).value;
      });
    },100)
  }

  updateStudent(){
    // @ts-ignore
    this.student = JSON.parse(localStorage.getItem('etuLists'))[this.list].etus[this.studentIndex];
    this.bindEvalToStudent();
    this.changeDetection.detectChanges();
  }

  bindEvalToStudent(){
    if(this.student.evals[this.eval]==undefined || this.student.evals.length==0){
      this.student.evals[this.eval]=this.evalsObjectList[this.eval];
      this.student.evals[this.eval]["wasEvaluated"] = false;
    }

    if(this.student.evals[this.eval].wasEvaluated){
      //mettre à jour la val des input
      document.querySelectorAll("#criteria").forEach((item)=>{
        // @ts-ignore
        item.value = this.student.evals[this.eval].criteres[parseInt(item.classList[0])].score;
      });
    }else{
      document.querySelectorAll("#criteria").forEach((item)=>{
        // @ts-ignore
        item.value = 0;
      });
      // @ts-ignore
      this.student.evals[this.eval].criteres.forEach((elt)=>{
        elt.score =0;
      })
    }
  }


  isNextBtnShown() {
    return this.studentIndex < this.students.length-1;
  }

  isPreviousBtnShown() {
    return this.studentIndex>0;
  }

  saveScore(index: number, val: Event) {
    // @ts-ignore
    this.student.evals[this.eval].criteres[index].score = val.path[0].value;
    this.student.evals[this.eval].wasEvaluated = true;
    this.students[this.studentIndex] = this.student;

    // @ts-ignore
    let lists = JSON.parse(localStorage.getItem('etuLists'));
    lists[this.list].etus=this.students;
    localStorage.setItem('etuLists',JSON.stringify(lists));
  }

  isEvaluated(): boolean {
    if(this.student.evals[this.eval] == undefined) return false;
    return this.student.evals[this.eval].wasEvaluated;
  }

  getMin(criteriaIndex:number) {
    let result=100;
    // @ts-ignore
    this.students.forEach((item,index)=>{
      if(item.evals[this.eval]!=undefined){
        if(item.evals[this.eval].criteres[criteriaIndex].score<result){
          result = item.evals[this.eval].criteres[criteriaIndex].score
        }
      }
    });
    // @ts-ignore
    return result;
  }

  getMax(criteriaIndex:number) {
    let result=0;
    // @ts-ignore
    this.students.forEach((item,index)=>{
      if(item.evals[this.eval]!=undefined){
        if(item.evals[this.eval].criteres[criteriaIndex].score>result){
          result = item.evals[this.eval].criteres[criteriaIndex].score
        }
      }
    });
    // @ts-ignore
    return result;
  }

  getMoy(criteriaIndex:number) {
    let sum = 0;
    let total =0;
    // @ts-ignore
    this.students.forEach((item,index)=>{
      if(item.evals[this.eval]!=undefined){
        sum = Number(sum) + Number(item.evals[this.eval].criteres[criteriaIndex].score);
        total++;
      }
    });
    return (sum/total);
  }
}
