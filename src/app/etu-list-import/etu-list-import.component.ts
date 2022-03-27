import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-etu-list-import',
  templateUrl: './etu-list-import.component.html',
  styleUrls: ['./etu-list-import.component.scss']
})
export class EtuListImportComponent{
  @Output() update = new EventEmitter<boolean>();
}
