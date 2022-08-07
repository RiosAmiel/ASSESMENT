import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'EmployeeTable';
  @ViewChild('grid1', { static: true })
  public grid!: IgxGridComponent;
  public searchText = '';
  public caseSensitive = false;
  public exactMatch = false;
  
  ngOnInit(): void {
    this.localData = employeesData;
  }

  public clearSearch() {
    this.searchText = '';
    this.grid.clearSearch();
}

public searchKeyDown(ev:any) {
    if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
        ev.preventDefault();
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
        ev.preventDefault();
        this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
}

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
}
