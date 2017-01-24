/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WildlifeComponent } from './wildlife.component';

describe('WildlifeComponent', () => {
  let component: WildlifeComponent;
  let fixture: ComponentFixture<WildlifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildlifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
