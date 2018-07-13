import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';

@Component({
  selector: 'color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.scss']
})
export class ColorGridComponent implements OnInit {

  @Input() colors;
  @Input() title:string;
  private cols: number = 4;

  constructor(
    private sanitizer:DomSanitizer,
    private media: ObservableMedia
  ) { }

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

  getBackgroundColor(color:string){
    return this.sanitizer.bypassSecurityTrustStyle(`${color}`);
  }
}
