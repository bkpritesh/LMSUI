import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusUploadComponent } from './syllabus-upload.component';

describe('SyllabusUploadComponent', () => {
  let component: SyllabusUploadComponent;
  let fixture: ComponentFixture<SyllabusUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
