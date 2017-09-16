import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { MyStatsComponent } from "./myStats/my-stats.component";
import { RatingsComponent } from "./ratings/ratings.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "ratings", component: RatingsComponent },
    { path: "mystats", component: MyStatsComponent },
    { path: "mystats/:id", component: MyStatsComponent },
    { path: "home", component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
