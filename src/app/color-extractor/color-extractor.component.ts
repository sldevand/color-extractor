import { Component, OnInit } from '@angular/core';
import { Image } from './shared/models/image.model';
import { ImageService } from './shared/services/image.service';
import { StorageService } from './shared/services/storage.service';
import { SnackbarService } from './shared/services/snackbar.service';
import { ImageInterface } from './shared/models/image-interface.model';

@Component({
  selector: 'color-extractor',
  templateUrl: './color-extractor.component.html',
  styleUrls: ['./color-extractor.component.scss']
})
export class ColorExtractorComponent implements OnInit {

  private images: Image[];

  constructor(
    private imageService: ImageService,
    private storageService: StorageService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.imageService.get().subscribe(async (images: ImageInterface[]) => {
      this.images = await images;
      this.images.length ?
        this.snackbarService.onGalleryBack() :
        this.fetchGallery();
    });
  }

  fetchGallery(): void {
    this.storageService.get().subscribe(async (images: ImageInterface[]) => {
      if (images) this.imageService.postAll(images);      
      this.snackbarService.onGalleryFetch();
    });
  }
}
