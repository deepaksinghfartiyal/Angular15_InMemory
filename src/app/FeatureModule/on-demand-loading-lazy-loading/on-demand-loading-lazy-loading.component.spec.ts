import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandLoadingLazyLoadingComponent } from './on-demand-loading-lazy-loading.component';

describe('OnDemandLoadingLazyLoadingComponent', () => {
  let component: OnDemandLoadingLazyLoadingComponent;
  let fixture: ComponentFixture<OnDemandLoadingLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDemandLoadingLazyLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDemandLoadingLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
