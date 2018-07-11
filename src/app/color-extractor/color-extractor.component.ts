import { Component, OnInit } from '@angular/core';
import { Image } from './shared/models/image.model';
import { ImageService } from './shared/services/image.service';

@Component({
  selector: 'color-extractor',
  templateUrl: './color-extractor.component.html',
  styleUrls: ['./color-extractor.component.scss']
})
export class ColorExtractorComponent implements OnInit {

  private images: Image[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.get().subscribe(
      async images => {
        this.images = await images;
      }
    );
  }

}
