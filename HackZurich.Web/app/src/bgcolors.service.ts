import { Injectable, Inject } from "@angular/core";

@Injectable()
export class BgColorsService {

    public function(value: number): string {

        const score = value;
        const target = 100;

        let color: string = "";

        if (score < (target - (target * 0.2)))
            color = "#ee1010";
        else if (score < target)
            color = "#e6c908";
        else {
            color = "#74b818";
        }
        if (score === 0) {
            color = "#666666";
        }

        return color;

    }
}