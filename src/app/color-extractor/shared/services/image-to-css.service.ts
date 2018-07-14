import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageToCssService {

  constructor() { }

  public convert(colors): Observable<string> {

    let css = "";
    css += this.convertOne(colors.background_colors, "background-color");
    css += this.convertOne(colors.foreground_colors, "foreground-color");
    css += this.convertOne(colors.image_colors, "image-color");
    css = css.replace(/ /g, '');

    return of(css);
  }

  private convertOne(colorArr, selector): string {
    let result = "";
    let index = 0;
    let attr = "";

    switch (selector) {
      case "background-color":
        attr = "background-color";
        break;
      default:
        attr = "color";
        break;
    };

    for (let color of colorArr) {
      result +=
        `.${selector}-${index} {
          ${attr}: ${color.html_code};
        }
        `;
      index++;
    }
    return result;
  }
}
