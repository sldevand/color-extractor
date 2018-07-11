import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInterface } from '../models/user-interface.model';
import { User } from '../models/user.model';
import { ImageInterface } from '../models/image-interface.model';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    //Consume internal
    this.http.get<UserInterface>(`assets/config.json`).subscribe(
      (data: User) => this.headers = this.getHeaders(data)
    );
  }

  post(file: File): Observable<ImageInterface> {
    let formData: FormData = new FormData;
    formData.append(`image`, file);
    return this.http.post<ImageInterface>(
      `https://api.imagga.com/v1/content`,
      formData, {
        headers: this.headers
      });
  }

  get(image:Image): Observable<ImageInterface> {
    return this.http.get<ImageInterface>(`https://api.imagga.com/v1/colors?content=${image.id}`, {
      headers: this.headers
    });
  }

  getHeaders(data) : HttpHeaders {
    return new HttpHeaders({
      "Authorization": "Basic "+ data.token
    });
  }

}
