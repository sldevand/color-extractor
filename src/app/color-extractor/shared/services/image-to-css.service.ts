import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const BACKGROUND_COLOR:string = "background-color";
const COLOR:string = "color";
@Injectable({
  providedIn: 'root'
})
export class ImageToCssService {

  constructor() { }

  public convert(colors): Observable<string> {

    let css = this.convertOne(colors.background_colors, "background-color");
    css += this.convertOne(colors.foreground_colors, "foreground-color");
    css += this.convertOne(colors.image_colors, "image-color");
    css = css.replace(/ /g, '');
    return of(css);
  }

  private convertOne(colorArr, selector: string): string {
    let result = "";   
    let index = 0;
    let attr = this.getAttribute(selector);
   
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

  private getAttribute(selector: string): string {
    switch (selector) {
      case BACKGROUND_COLOR:
        return BACKGROUND_COLOR;
      default:
        return COLOR;
    };
  }
}
