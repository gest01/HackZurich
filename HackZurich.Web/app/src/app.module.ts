
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { APP_CONFIG, AppConfig } from "./app.config";
import { DataService } from "./data.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [
    DataService,
    { provide: APP_CONFIG, useValue: AppConfig },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
