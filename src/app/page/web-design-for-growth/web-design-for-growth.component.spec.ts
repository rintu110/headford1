import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignForGrowthComponent } from './web-design-for-growth.component';

describe('WebDesignForGrowthComponent', () => {
  let component: WebDesignForGrowthComponent;
  let fixture: ComponentFixture<WebDesignForGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignForGrowthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDesignForGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
