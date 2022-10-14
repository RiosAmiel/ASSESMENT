import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { debug } from 'console';
import { IgxCheckboxModule, IgxDatePickerModule, IgxGridModule, IgxStringFilteringOperand } from 'igniteui-angular';
import { of } from 'rxjs';
import { Users } from '../Models/models';
import { DataService } from '../services/data.service';
import { EmployeeTableComponent } from './employeetable.component';

describe('EmployeeTableComponent', () => {
  let component: EmployeeTableComponent;
  let fixture: ComponentFixture<EmployeeTableComponent>;
  let ds: DataService;
  const users: Users[] = []

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeTableComponent],
      imports: [FormsModule, BrowserAnimationsModule, IgxGridModule,
         IgxDatePickerModule, IgxCheckboxModule, HttpClientTestingModule ]
      
    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeTableComponent);
    component = fixture.componentInstance;
    ds = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('covers PullUsers()', () => {
    spyOn(ds, 'getPosts').and.returnValue(of(users));
    component.PullUsers();
    fixture.detectChanges();
    expect(component.localData).toEqual(users);
  });
  
  it('covers clearSearch()', () => {
    component.clearSearch();
    expect(component.searchText).toEqual('');
  });

  it('covers updateSearch()', () => {
    component.updateSearch();
    expect(component.caseSensitive).toBeTruthy();
  });

  it('covers updateExactSearch()', () => {
    component.updateExactSearch();
    expect(component.exactMatch).toBeTruthy();
  });

  it('covers filter()', () => {
    const search = fixture.debugElement.query(By.css('#search1'));
    search.nativeElement.value = 'franklin';
    search.nativeElement.dispatchEvent(new Event('input'));
    expect(component.filter).toBeTruthy();
    expect(search.nativeElement.value).toContain('franklin');
  });
});
