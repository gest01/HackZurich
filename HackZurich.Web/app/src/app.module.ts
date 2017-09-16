
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { APP_CONFIG, AppConfig } from "./app.config";
import { DataService } from "./data.service";
import { FirebaseService } from "./firebase.service";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { DetailComponent } from "./detail.component";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { FileUploadModule } from "ng2-file-upload";
import { FileUploadComponent } from "./fileupload/fileupload.component";
import { NouisliderModule } from "ng2-nouislider";
import { PopoverModule } from "ngx-popover";
import { NgLoadingBarModule } from "ng-loading-bar";
import { HTTP_INTERCEPTOR } from "./http-interceptor";
import { BgColorsService } from "./bgcolors.service";

export const firebaseConfig = {
  apiKey: "AIzaSyC714sV9ckNYVHS4RLxcTx4GjxXJFTszwg",
  authDomain: "hackzurich2017.firebaseapp.com",
  databaseURL: "https://hackzurich2017.firebaseio.com",
  projectId: "hackzurich2017",
  storageBucket: "hackzurich2017.appspot.com",
  messagingSenderId: "885304700993",
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FileUploadModule,
    NouisliderModule,
    PopoverModule,
    NgLoadingBarModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    LoginComponent,
    FileUploadComponent,
  ],
  providers: [
    DataService,
    FirebaseService,
    LoginService,
    BgColorsService,
    HTTP_INTERCEPTOR,
    { provide: APP_CONFIG, useValue: AppConfig },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
