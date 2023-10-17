import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcluirPage } from './excluir.page';

describe('ExcluirPage', () => {
  let component: ExcluirPage;
  let fixture: ComponentFixture<ExcluirPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExcluirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
