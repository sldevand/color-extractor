import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { Image } from '../shared/models/image.model';
import { ImageService } from '../shared/services/image.service';
import { Router } from '@angular/router';



@Component({
  selector: 'delete-image',
  templateUrl: './delete-image.component.html',
  styleUrls: ['./delete-image.component.scss']
})
export class DeleteImageComponent implements OnInit {

  @Input() image: Image;

  constructor(

    private storageService: StorageService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  delete() {
    this.imageService.delete(this.image).subscribe(
      (images) => {
        this.storageService.delete(this.image);
        this.router.navigate(['/images']);
      }
    );
  }

}
