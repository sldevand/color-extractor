import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloaderService {

  constructor() { }

  downloadFile(data, filename) {

    let blob = new Blob(['\ufeff' + data], { type: 'text/css;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", `${filename}.css`);
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

}
