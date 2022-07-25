import { Component, OnInit } from '@angular/core';
import { SconewsapiService } from 'src/app/services/sconewsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api:SconewsapiService) { }
  // Display Health Data
  healthNewsData:any =[];

  ngOnInit(): void {
    this.api.healthHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.healthNewsData = result.articles;
    });
    }
  }

