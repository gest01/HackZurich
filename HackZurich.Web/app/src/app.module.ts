
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
