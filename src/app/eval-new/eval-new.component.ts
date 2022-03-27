import {
  Component,
  ComponentFactoryResolver,
  ComponentRef, EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CritereFieldComponent} from "../critere-field/critere-field.component";

@Component({
  selector: 'app-eval-new',
  templateUrl: './eval-new.component.html',
  styleUrls: ['./eval-new.component.scss']
})
export class EvalNewComponent implements OnInit {
  @Output() update = new EventEmitter<boolean>();
  // @ts-ignore
  @ViewChild('criteres', {read: ViewContainerRef}) target: ViewContainerRef;
  // @ts-ignore
  private componentRef: ComponentRef<any>;
  evalName: any;
  allEvals: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('allEvals')!=''){
      // @ts-ignore
      let json: string = localStorage.getItem('allEvals');
      this.allEvals = JSON.parse(json);
    } else{
      this.allEvals = {};
    }
  }

  addElement() {
    let childComponent = this.componentFactoryResolver.resolveComponentFactory(CritereFieldComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

  addEval() {
    if(this.evalName!='' && this.evalName!=undefined){
      if(this.allEvals[this.evalName] == undefined){
        this.allEvals[this.evalName] = {'title':this.evalName, 'criteres':[]};

        document.querySelectorAll('.critere').forEach((item)=>{
          // @ts-ignore
          if(item.value !=''){
            // @ts-ignore
            this.allEvals[this.evalName].criteres.push({'title':item.value,'score':0})
          }
        });
        localStorage.setItem('allEvals',JSON.stringify(this.allEvals));
        this.update.emit(true);
      }
    }
  }
}
