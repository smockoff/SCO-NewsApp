import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SconewsapiService {
  // All news
  url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=07a0e46325ca4391bf934e2d90fde540';

  // Tech news
  url_tech = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=07a0e46325ca4391bf934e2d90fde540';


  // Health news
  url_health = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=07a0e46325ca4391bf934e2d90fde540';


   // Sport news
   url_sport = 'https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=07a0e46325ca4391bf934e2d90fde540';

  constructor(private http:HttpClient) {}
  // Common News
   scoHeadlines():Observable<any>{
    return this.http.get(this.url)
   }

   // Tech News
   techHeadlines():Observable<any>{
    return this.http.get(this.url_tech)
   }

   // Health News
   healthHeadlines():Observable<any>{
    return this.http.get(this.url_health)
   }

    // Health News
    sportHeadlines():Observable<any>{
      return this.http.get(this.url_sport)
     }




}
