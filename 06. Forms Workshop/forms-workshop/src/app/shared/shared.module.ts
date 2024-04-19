import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent,
    EmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, WelcomeComponent, EmailDirective ]
})
export class SharedModule { }
