import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractCssComponent } from './extract-css.component';

describe('ExtractCssComponent', () => {
  let component: ExtractCssComponent;
  let fixture: ComponentFixture<ExtractCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtractCssComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
