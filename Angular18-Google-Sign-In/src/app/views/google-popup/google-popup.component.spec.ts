import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePopupComponent } from './google-popup.component';

describe('GooglePopupComponent', () => {
  let component: GooglePopupComponent;
  let fixture: ComponentFixture<GooglePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooglePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GooglePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
