import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../shared/services/image-api.service';
import { ImageInterface } from '../shared/models/image-interface.model';
import { Image } from '../shared/models/image.model';
import { SnackbarService } from '../shared/services/snackbar.service';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  private reader: FileReader = new FileReader;
  constructor(
    private imageApiService: ImageApiService,
    private snackBarService: SnackbarService,
    private imageService : ImageService

  ) { }

  ngOnInit(): void {
  }

  onUpload(event: MSInputMethodContext): void {
    let input: HTMLInputElement = <HTMLInputElement>event.target;
    let file: File = input.files[0];
    this.snackBarService.onRead();
    this.reader.onload = (event) => {
      this.snackBarService.onReadSuccess();
      this.post(file);
    };
    this.reader.onerror = event => this.snackBarService.onReadError();
    this.reader.readAsDataURL(file);

  }

  post(file: File) {
    this.snackBarService.onSubmit();
    this.imageApiService.post(file).subscribe(
      (data: ImageInterface) => {
        this.snackBarService.onSubmitSuccess();
        this.get({ ...data.uploaded[0] });
      },
      (error) =>  this.snackBarService.onSubmitError()
    );

  }

  get(image: Image) {
    this.snackBarService.onExtract();
    this.imageApiService.get(image).subscribe(

        (data:ImageInterface) => {
            let uploaded = data.results[0].info;
            uploaded.id = image.id;
            uploaded.fileName = image.fileName;
            uploaded.src=this.reader.result;
            this.imageService.post(uploaded);
            this.snackBarService.onExtractSuccess();            
        },
        (error) =>  this.snackBarService.onExtractError()
    );
  }
}
