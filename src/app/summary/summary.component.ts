import { Component, ElementRef } from '@angular/core';
import { SummaryService } from './summary.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  summaryData: any; // A variable to hold the summary data
  imageUrls: unknown;
  constructor(
    private summaryService: SummaryService,
    private elements: ElementRef
  ) {
    this.summaryData = summaryService.getData();
  }

  
}
