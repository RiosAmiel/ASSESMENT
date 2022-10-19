import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxStringFilteringOperand } from 'igniteui-angular';
import { coreUsers, Users } from '../Models/models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  public localData: Users[] = [];
  public localCoreData: coreUsers[] = [];
  title = 'EmployeeTable';
  @ViewChild('grid1', { static: true })
  public grid!: IgxGridComponent;
  public searchText = '';
  public caseSensitive = false;
  public exactMatch = false;

  constructor (
    private ds: DataService,
  ) {}

  ngOnInit(): void {
    this.PullCoreUsers();
  }

  PullUsers(): void {
    this.ds.getPosts().subscribe((data:Users[]) =>{ 
      this.localData = data;
    });
  }
  PullCoreUsers(): void {
    this.ds.getUsersCore().subscribe((data:coreUsers[]) => {
      this.localCoreData = data;
      console.log(this.localCoreData);
    }); 
  }
  public clearSearch(): void {
    this.searchText = '';
    this.grid.clearSearch();
}

public filter(event: Event): void {
  const { target } = event;
  this.grid.filter('fullname', (target as HTMLInputElement).value, IgxStringFilteringOperand.instance().condition('contains'), true);
  this.grid.markForCheck;
}

public updateSearch(): void {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
public updateExactSearch(): void {
  this.exactMatch = !this.exactMatch;
  this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);

}
}
 