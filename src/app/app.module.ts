import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MaterialComponent } from './material/material.component';
import { NgBootstrapComponent } from './ng-bootstrap/ng-bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ModalComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    TooltipComponent,
    CheckboxComponent,
    MaterialComponent,
    NgBootstrapComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgSelectModule,
    NgbModule.forRoot(),
    OwlDateTimeModule, 
    MatSelectModule,
    OwlNativeDateTimeModule,
    AngularMultiSelectModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
