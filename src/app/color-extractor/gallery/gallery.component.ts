import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../shared/models/image.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';


@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  @Input() images: Image[];
  private cols: number = 4;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private media: ObservableMedia
  ) {
  }

  ngOnInit() {
    this.media.asObservable().subscribe(
      (changes: MediaChange) => this.cols = this.getColNumber(changes)
    );
  }

  getColNumber(changes: MediaChange): number {

    switch (changes.mqAlias) {
      case "xs":
        return 2;
      case "sm":
        return 4;
      case "md":
        return 6;
      case "lg":
        return 8;
      case "xl":
        return 10;
      default:
        return 6;
    }
  }

  navigate(id: string) {
    this.router.navigate([`image/${id}`]);
  }

  getBackground(src: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${src})`);
  }

}
