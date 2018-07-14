import { Component, OnInit, Input, Inject } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { Image } from '../shared/models/image.model';
import { ImageService } from '../shared/services/image.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';


export interface DialogData {
  id: string;
  src: string;
}

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
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { id: this.image.id, src: this.image.src }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.delete();
    });
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