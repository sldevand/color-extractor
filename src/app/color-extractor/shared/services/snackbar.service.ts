import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

const DURATION: number = 1000;
@Injectable({
  providedIn: 'root'
})

export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {

  }

  onGalleryBack(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Back to gallery', "", { duration: DURATION });
  }

  onGalleryFetch(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Gallery Fetched', "", { duration: DURATION });
  }

  onImageExists(): MatSnackBarRef<SimpleSnackBar> {

    return this.snackBar.open('Image already exists', "", { duration: DURATION });
  }

  onRead(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File Reading...', "", { duration: DURATION });
  }

  onReadSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File Reading OK', "", { duration: DURATION });
  }

  onReadError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File Reading Error', "", { duration: DURATION });
  }

  onStore(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Storing...', "", { duration: DURATION });
  }

  onStoreSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Storing OK', "", { duration: DURATION });
  }

  onStoreError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Storing Error', "", { duration: DURATION });
  }

  onSubmit(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File submitting...', "", { duration: DURATION });
  }

  onSubmitSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File submitting OK', "", { duration: DURATION });
  }

  onSubmitError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('File submitting Error', "", { duration: DURATION });
  }

  onExtract(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Extracting...', "", { duration: DURATION });
  }

  onExtractSuccess(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Extracting OK', "", { duration: DURATION });
  }

  onExtractError(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('Image Extracting Error', "", { duration: DURATION });
  }

  onExtractToCSS(): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open('CSS Extracting to file...', "", { duration: DURATION });
  }

}
