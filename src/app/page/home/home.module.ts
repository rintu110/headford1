import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports:      [ NgbModule, CommonModule, NgbAccordionModule ],
    declarations: [ HomeComponent],
    exports: [
        HomeComponent
      ],
    bootstrap:    [  ]
  }),

 