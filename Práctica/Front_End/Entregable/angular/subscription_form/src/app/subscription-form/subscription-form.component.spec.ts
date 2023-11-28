import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionFormComponent } from './subscription-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SubscriptionFormComponent', () => {
  let component: SubscriptionFormComponent;
  let fixture: ComponentFixture<SubscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionFormComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
