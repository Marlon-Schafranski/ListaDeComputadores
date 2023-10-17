import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastradoPage } from './cadastrado.page';

describe('CadastradoPage', () => {
  let component: CadastradoPage;
  let fixture: ComponentFixture<CadastradoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
