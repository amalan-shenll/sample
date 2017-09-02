import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { TestService } from "./test.service";
import { HttpModule, Http } from "@angular/http";
import { LangComponent } from './lang/lang.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'lang', component: LangComponent },
  { path: 'chart', component: ChartComponent }
];

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    MoviesComponent,
    LangComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
