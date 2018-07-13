import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  onGalleryBack(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Back to gallery', "", { duration: 3000 });
  }

  onGalleryFetch(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Gallery Fetched', "", { duration: 3000 });
  }

  onImageExists(): MatSnackBarRef<SimpleSnackBar> {

    return this.snackBar.open('Image already exists', "", { duration: 3000 });
  }

  onRead(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File Reading...', "", { duration: 3000 });
  }

  onReadSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File Reading OK', "", { duration: 3000 });
  }

  onReadError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File Reading Error', "", { duration: 3000 });
  }

  onStore(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Storing...', "", { duration: 3000 });
  }

  onStoreSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Storing OK', "", { duration: 3000 });
  }

  onStoreError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Storing Error', "", { duration: 3000 });
  }

  onSubmit(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File submitting...', "", { duration: 3000 });
  }

  onSubmitSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File submitting OK', "", { duration: 3000 });
  }

  onSubmitError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File submitting Error', "", { duration: 3000 });
  }

  onExtract(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Extracting...', "", { duration: 3000 });
  }

  onExtractSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Extracting OK', "", { duration: 3000 });
  }

  onExtractError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Extracting Error', "", { duration: 3000 });
  }

}
