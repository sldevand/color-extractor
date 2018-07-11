import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../shared/models/image.model';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() images: Image[];

  constructor() { }

  ngOnInit() {
  }

}
