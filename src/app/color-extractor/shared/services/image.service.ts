import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';
import { Observable, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: Image[] = [];

  constructor(
  ) { }

  get(): Observable<Image[]> {
    return of(this.images);
  }

  post(image: Image) {
    this.images.push(image);
  }
  postAll(images: Image[]): void {
    images.forEach((image: Image) => this.images.push(image));
  }

  findById(id: string): Observable<Image> {
    return of(this.images.find((image: Image) => image.id === id));
  }

  findBySrc(src: string): Observable<Image> {
    return of(this.images.find((image: Image) => image.src === src));
  }
}
