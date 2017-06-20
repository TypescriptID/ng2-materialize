import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { PropertiesTableModule } from '../shared/properties-table/properties-table.module';
import { FormValidationComponent } from './form-validation.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownToHtmlModule.forRoot(),
    PropertiesTableModule,
    ReactiveFormsModule,
  ],
  declarations: [FormValidationComponent],
})
export class FormValidationModule { }
