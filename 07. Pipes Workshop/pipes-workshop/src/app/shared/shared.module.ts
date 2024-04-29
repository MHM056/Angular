import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { SliceTimePipe } from './pipes/slice-time.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
    SliceTimePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, WelcomeComponent, EmailDirective, SlicePipe, ElapsedTimePipe, SliceTimePipe ]
})
export class SharedModule { }
