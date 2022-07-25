import { Component, OnInit } from '@angular/core';
import { SconewsapiService } from 'src/app/services/sconewsapi.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {
  // Display headline data
  topHeadlinesData:any =[];
  constructor(private api:SconewsapiService) { }

  ngOnInit(): void {
    this.api.scoHeadlines().subscribe((result) => {
      // console.log(result.articles);
      this.topHeadlinesData =result.articles;
    })
  }

}
