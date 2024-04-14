import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, WelcomeComponent]
})
export class SharedModule { }
