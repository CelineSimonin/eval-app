import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eval-app';

  ngOnInit(): void {
    if(localStorage.getItem('etuLists')==undefined)localStorage.setItem('etuLists','');
    if(localStorage.getItem('allEvals')==undefined)localStorage.setItem('allEvals','');
  }
}
