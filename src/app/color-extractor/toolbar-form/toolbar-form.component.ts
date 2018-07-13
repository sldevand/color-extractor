import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Image } from "../shared/models/image.model";


@Component({
  selector: 'toolbar-form',
  templateUrl: './toolbar-form.component.html',
  styleUrls: ['./toolbar-form.component.scss']
})
export class ToolbarFormComponent implements OnInit {
  @Input() image: Image;

  private formGroup: FormGroup;
  private filename: string;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.filename == "no name";
    this.formGroup = this.getFormGroup(); 

    this.formGroup.get("filename").valueChanges.subscribe(
      (value: string) => {
       this.image.filename = value;
      }
    );
  }

  ngOnInit() {

  }

  getFormGroup() {
    return new FormGroup(
      this.formBuilder.group({
        filename: [
          this.filename,
          [
            Validators.email,
            Validators.required
          ]
        ]
      }).controls, { updateOn: 'blur' }
    );

  }
}
