import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMsg: string = '';
  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.apiError$.subscribe((err: any) => {
      console.log(err);
      this.errorMsg = err?.message || '';
    });
  }
}
