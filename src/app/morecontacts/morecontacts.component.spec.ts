import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorecontactsComponent } from './morecontacts.component';

describe('MorecontactsComponent', () => {
  let component: MorecontactsComponent;
  let fixture: ComponentFixture<MorecontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorecontactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorecontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
