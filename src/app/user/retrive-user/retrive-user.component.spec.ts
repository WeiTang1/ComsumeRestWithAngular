import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetriveUserComponent } from './retrive-user.component';

describe('RetriveUserComponent', () => {
  let component: RetriveUserComponent;
  let fixture: ComponentFixture<RetriveUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetriveUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetriveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
