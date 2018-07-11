import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: Image[] = [];

  constructor() { }

  get(): Observable<Image[]> {
    return of(this.images);
  }

  post(image:Image) {
    this.images.push(image);
  }

}
