import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bMarketingComponent } from './b2b-marketing.component';

describe('B2bMarketingComponent', () => {
  let component: B2bMarketingComponent;
  let fixture: ComponentFixture<B2bMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2bMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2bMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
