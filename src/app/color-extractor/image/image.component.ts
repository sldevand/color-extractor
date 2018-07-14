import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../shared/services/image.service';
import { Image } from '../shared/models/image.model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { StorageService } from '../shared/services/storage.service';
import { ImageInterface } from '../shared/models/image-interface.model';
@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  private image: Image;

  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    let id = this.active.snapshot.paramMap.get("id");
    this.findById(id);
  }

  findById(id: string): void {
    this.imageService.findById(id).subscribe(async (image: Image) =>
      await image
        ? (this.image = image)
        : this.getFromStorage(id)
    );
  }

  getFromStorage(id: string): void {
    this.storageService.get().subscribe(async (images: ImageInterface[]) => {
      if (!await images || !(this.image = images.find(
        (image: Image) => image.id === id
      ))) {
        this.router.navigate([`images`]);
      }
    });
  }

  getBackground(src: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${src})`);
  }
}
