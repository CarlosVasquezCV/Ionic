import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisProyectosPage } from './mis-proyectos.page';

describe('MisProyectosPage', () => {
  let component: MisProyectosPage;
  let fixture: ComponentFixture<MisProyectosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisProyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
