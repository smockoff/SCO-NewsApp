import { Component, OnInit } from '@angular/core';
import { SconewsapiService } from 'src/app/services/sconewsapi.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private api:SconewsapiService) { }
  sportNewsData:any =[];

  ngOnInit(): void {
    this.api.sportHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.sportNewsData = result.articles;
    });
  }

}
