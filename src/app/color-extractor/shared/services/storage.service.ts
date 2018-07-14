import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable, of } from 'rxjs';
import { Image } from '../models/image.model';
import { ImageInterface } from '../models/image-interface.model';

const namespace = "color-extractor";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    private localStorage: LocalStorage
  ) {

  }

  post(image: Image): void {
    this.get().subscribe(
      async (images: ImageInterface[]) => {
        images = await images || [];
        images.push(image);
        this.localStorage.setItem(`${namespace}-images`, images).subscribe(() => { });
      }
    )
  }

  get(): Observable<ImageInterface[]> {
    return this.localStorage.getItem<ImageInterface[]>(`${namespace}-images`);
  }

  delete(image: Image): void {
    this.get().subscribe(
      async (images: ImageInterface[]) => {
        images = await images || [];
        for (let i = 0; i < images.length; i++) {
          if (images[i].src === image.src) {
            images.splice(i,1);
            break;
          }
        }
        this.localStorage.setItem(`${namespace}-images`, images).subscribe(() => { });
      }
    )
  }

}
