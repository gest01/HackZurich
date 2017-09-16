import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "onlyMine" })
export class OnlyMinePipe implements PipeTransform {

  public transform(allItems: any[], filter: any) {
    return allItems.filter((item) => item.user.uid === filter.uid);
  }
}