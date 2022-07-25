import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule } from '@angular/common/http';
import { SconewsapiService } from './services/sconewsapi.service';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { SportComponent } from './sport/sport.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopHeadlineComponent,
    TechComponent,
    HealthComponent,
    SportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SconewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
