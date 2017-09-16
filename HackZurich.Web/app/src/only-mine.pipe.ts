import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "onlyMine" })
export class OnlyMinePipe implements PipeTransform {

  public transform(allItems: any[], filter: any) {
    console.log(filter.uid);
    console.log(allItems);
    console.log(allItems[0].user.uid);
    return allItems.filter((item) => item.user.uid == filter.uid);
  }
}