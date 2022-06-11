import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemodalComponent } from './moviemodal.component';

describe('MoviemodalComponent', () => {
  let component: MoviemodalComponent;
  let fixture: ComponentFixture<MoviemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
