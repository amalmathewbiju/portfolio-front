import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { AdminPageComponent } from './admin-page.component';

describe('AdminPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Add HttpClientTestingModule here
        AdminPageComponent // Import the standalone component
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AdminPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
