import { Component, OnInit } from '@angular/core';
import { SconewsapiService } from 'src/app/services/sconewsapi.service';


@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  constructor(private api: SconewsapiService) { }
  // Display headline data
  techNewsData: any = [];
  ngOnInit(): void {
   this.api.techHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
  }
}
