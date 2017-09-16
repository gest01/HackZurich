import { Pipe, PipeTransform } from "@angular/core";
import { FirebaseService } from "./firebase.service";

@Pipe({ name: "onlyMine" })
export class OnlyMinePipe implements PipeTransform {

  public userId: string;

  constructor(public firebase: FirebaseService) {
    firebase.user().subscribe((user) => this.userId = user.uid);
  }

  public transform(allItems: any[]) {
    console.log(this.userId);
    return allItems.filter((item) => item.uid === this.userId);
  }
}