import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { EvalComponent } from './eval/eval.component';
import { EtuListNewComponent } from './etu-list-new/etu-list-new.component';
import { EtuNewComponent } from './etu-new/etu-new.component';
import {FormsModule} from "@angular/forms";
import { EtuListDeleteComponent } from './etu-list-delete/etu-list-delete.component';
import { EtuDeleteComponent } from './etu-delete/etu-delete.component';
import { EvalNewComponent } from './eval-new/eval-new.component';
import { CritereFieldComponent } from './critere-field/critere-field.component';
import { EvalDeleteComponent } from './eval-delete/eval-delete.component';
import { ListComponent } from './list/list.component';
import { EvaluatorComponent } from './evaluator/evaluator.component';
import { EvalSelectorComponent } from './eval-selector/eval-selector.component';
import { EtuListImportComponent } from './etu-list-import/etu-list-import.component';
import { JsonFileUploadComponent } from './json-file-upload/json-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    EvalComponent,
    EtuListNewComponent,
    EtuNewComponent,
    EtuListDeleteComponent,
    EtuDeleteComponent,
    EvalNewComponent,
    CritereFieldComponent,
    EvalDeleteComponent,
    ListComponent,
    EvaluatorComponent,
    EvalSelectorComponent,
    EtuListImportComponent,
    JsonFileUploadComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
