import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

 languages:any;

  constructor(public translate: TranslateService) {
    this.languages = [
      {
        short: "en",
        label: "English"
      },
      {
        short: "ta",
        label: "Tamil"
      }
    ];
    translate.addLangs(["en", "ta"]);
    translate.setDefaultLang('en');
   }

  ngOnInit() {
  }

  changeLang(lang){
    this.translate.use(lang);
    console.log("selected:"+lang);
  }

}
