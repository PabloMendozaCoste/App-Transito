import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMultaPage } from './form-multa.page';

describe('FormMultaPage', () => {
  let component: FormMultaPage;
  let fixture: ComponentFixture<FormMultaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormMultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
