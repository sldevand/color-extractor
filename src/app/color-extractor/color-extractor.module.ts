import { NgModule } from '@angular/core';
import { ColorExtractorComponent } from './color-extractor.component';
import { ImageComponent } from './image/image.component';
import { UploadComponent } from './upload/upload.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from './shared/shared.module';
import { ColorExtractorRoutingModule } from './color-extractor-routing/color-extractor-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarFormComponent } from './toolbar-form/toolbar-form.component';
import { ColorGridComponent } from './color-grid/color-grid.component';
import { ExtractCssComponent } from './extract-css/extract-css.component';
import { DeleteImageComponent } from './delete-image/delete-image.component';
import { DialogComponent } from './dialog/dialog.component';





@NgModule({
  imports: [

    SharedModule,
    ColorExtractorRoutingModule

  ],
  declarations: [
    ColorExtractorComponent,
    ImageComponent,
    UploadComponent,
    GalleryComponent,
    ToolbarComponent,
    ToolbarFormComponent,
    ColorGridComponent,
    ExtractCssComponent,
    DeleteImageComponent,
    DialogComponent

  ],
  exports: [
    ColorExtractorComponent,
    ImageComponent,
    UploadComponent,
    GalleryComponent,
    ToolbarComponent,
    ToolbarFormComponent,
    ColorGridComponent,
    ExtractCssComponent,
    DeleteImageComponent,
    DialogComponent

  ]
})
export class ColorExtractorModule { }
