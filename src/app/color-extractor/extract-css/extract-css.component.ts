import { Component, OnInit, Input } from '@angular/core';
import { SnackbarService } from '../shared/services/snackbar.service';
import { Image } from '../shared/models/image.model';
import { FileDownloaderService } from '../shared/services/file-downloader.service';
import { ImageToCssService } from '../shared/services/image-to-css.service';

@Component({
  selector: 'extract-css',
  templateUrl: './extract-css.component.html',
  styleUrls: ['./extract-css.component.scss']
})
export class ExtractCssComponent implements OnInit {

  @Input() image: Image;

  constructor(
    private snackbarService: SnackbarService,
    private downloaderService: FileDownloaderService,
    private imageToCssService: ImageToCssService
  ) { }

  ngOnInit() {
  }

  extract() {
    this.imageToCssService.convert(this.image).subscribe(
      (data: string) => {
        this.downloaderService.downloadFile(data, this.image.filename);
        this.snackbarService.onExtractToCSS();
      }
    );
  }
}
