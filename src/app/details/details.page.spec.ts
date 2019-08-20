// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '../../../node_modules/@angular/router';
// import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
// import { DetailsPage } from './details.page';

// describe('DetailsPage', () => {
//   let component: DetailsPage;
//   let fixture: ComponentFixture<DetailsPage>;
//   const fakeActivatedRoute = {
//     snapshot: { paramMap : { get(): string {
//       return 'id';
//     }} }
//   } ;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DetailsPage ],
//       imports: [RouterTestingModule],
//       providers: [
//         {provide: ActivatedRoute, useValue: fakeActivatedRoute}
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DetailsPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
