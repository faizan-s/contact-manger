import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmContactstableComponent } from './cm-contactstable.component';

describe('CmContactstableComponent', () => {
  let component: CmContactstableComponent;
  let fixture: ComponentFixture<CmContactstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CmContactstableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmContactstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
