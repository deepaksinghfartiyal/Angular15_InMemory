import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignComponent } from './material-design.component';

describe('MaterialDesignComponent', () => {
  let component: MaterialDesignComponent;
  let fixture: ComponentFixture<MaterialDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
