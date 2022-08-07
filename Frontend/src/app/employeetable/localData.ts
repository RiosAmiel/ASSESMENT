export interface Employee {
  EmployeeID: number;
  FirstName: string;
  LastName: string;
  Country: string;
  Age: number;
  RegistererDate: Date;
  IsActive: boolean;
}

const lastYear = new Date().getFullYear() - 1;
export const employeesData: Employee[] = [
  {
    EmployeeID: 1,
    FirstName: 'Downs',
    LastName: 'Holcomb',
    Country: 'Italy',
    Age: 35,
    RegistererDate: new Date(lastYear, 7, 25),
    IsActive: false
  },
  {
    EmployeeID: 2,
    FirstName: 'Mckenzie',
    LastName: 'Calderon',
    Country: 'USA',
    Age: 26,
    RegistererDate: new Date(lastYear - 1, 9, 22),
    IsActive: false
  },
  {
    EmployeeID: 3,
    FirstName: 'Howell',
    LastName: 'Hawkins',
    Country: 'Canada',
    Age: 25,
    RegistererDate: new Date(lastYear, 8, 8),
    IsActive: false
  },
  {
    EmployeeID: 4,
    FirstName: 'Sheppard',
    LastName: 'Nicholson',
    Country: 'Italy',
    Age: 49,
    RegistererDate: new Date(lastYear - 1, 6, 28),
    IsActive: false
  },
  {
    EmployeeID: 5,
    FirstName: 'Bettye',
    LastName: 'Trujillo',
    Country: 'Canada',
    Age: 37,
    RegistererDate: new Date(new Date().setDate(-20)),
    IsActive: false
  },
  {
    EmployeeID: 6,
    FirstName: 'Joyce',
    LastName: 'Vaughan',
    Country: 'USA',
    Age: 48,
    RegistererDate: new Date(lastYear - 1, 4, 24),
    IsActive: false
  },
  {
    EmployeeID: 7,
    FirstName: 'Janine',
    LastName: 'Munoz',
    Country: 'USA',
    Age: 59,
    RegistererDate: new Date(lastYear - 1, 2, 9),
    IsActive: true
  },
  {
    EmployeeID: 8,
    FirstName: 'Betsy',
    LastName: 'Short',
    Country: 'USA',
    Age: 26,
    RegistererDate: new Date(new Date().setMonth(-1)),
    IsActive: true
  },
  {
    EmployeeID: 9,
    FirstName: 'Tanisha',
    LastName: 'Harrington',
    Country: 'USA',
    Age: 31,
    RegistererDate: new Date(lastYear - 1, 11, 25),
    IsActive: false
  },
  {
    EmployeeID: 10,
    FirstName: 'French',
    LastName: 'Sullivan',
    Country: 'Italy',
    Age: 37,
    RegistererDate: new Date(new Date().setMonth(-2)),
    IsActive: true
  },
  {
    EmployeeID: 11,
    FirstName: 'Gomez',
    LastName: 'Sandoval',
    Country: 'Italy',
    Age: 24,
    RegistererDate: new Date(lastYear - 1, 6, 19),
    IsActive: true
  },
  {
    EmployeeID: 12,
    FirstName: 'Estes',
    LastName: 'Soto',
    Country: 'Canada',
    Age: 24,
    RegistererDate: new Date(new Date().setDate(-2)),
    IsActive: true
  },
  {
    EmployeeID: 13,
    FirstName: 'Newman',
    LastName: 'Mathews',
    Country: 'Italy',
    Age: 60,
    RegistererDate: new Date(lastYear - 1, 10, 9),
    IsActive: true
  },
  {
    EmployeeID: 14,
    FirstName: 'Paul',
    LastName: 'Harper',
    Country: 'USA',
    Age: 52,
    RegistererDate: new Date(lastYear - 1, 5, 9),
    IsActive: true
  },
  {
    EmployeeID: 15,
    FirstName: 'Sharpe',
    LastName: 'Blair',
    Country: 'Canada',
    Age: 41,
    RegistererDate: new Date(new Date().setMonth(-3)),
    IsActive: false
  },
  {
    EmployeeID: 16,
    FirstName: 'Kirk',
    LastName: 'Downs',
    Country: 'USA',
    Age: 58,
    RegistererDate: new Date(lastYear, 7, 10),
    IsActive: false
  },
  {
    EmployeeID: 17,
    FirstName: 'Abby',
    LastName: 'Wheeler',
    Country: 'Canada',
    Age: 42,
    RegistererDate: new Date(lastYear, 3, 28),
    IsActive: false
  },
  {
    EmployeeID: 18,
    FirstName: 'Walter',
    LastName: 'Roth',
    Country: 'Canada',
    Age: 36,
    RegistererDate: new Date(lastYear, 7, 24),
    IsActive: true
  },
  {
    EmployeeID: 19,
    FirstName: 'Pratt',
    LastName: 'Mann',
    Country: 'Canada',
    Age: 40,
    RegistererDate: new Date(lastYear, 7, 3),
    IsActive: true
  },
  {
    EmployeeID: 20,
    FirstName: 'Blackwell',
    LastName: 'Randall',
    Country: 'Italy',
    Age: 20,
    RegistererDate: new Date(new Date().setDate(-1)),
    IsActive: true
  },
  {
    EmployeeID: 21,
    FirstName: 'Linda',
    LastName: 'Sanchez',
    Country: 'USA',
    Age: 26,
    RegistererDate: new Date(lastYear - 1, 7, 24),
    IsActive: false
  },
  {
    EmployeeID: 22,
    FirstName: 'Nieves',
    LastName: 'Hampton',
    Country: 'Italy',
    Age: 27,
    RegistererDate: new Date(lastYear - 1, 11, 10),
    IsActive: false
  },
  {
    EmployeeID: 23,
    FirstName: 'Pruitt',
    LastName: 'Pace',
    Country: 'Canada',
    Age: 25,
    RegistererDate: new Date(lastYear - 1, 11, 8),
    IsActive: true
  },
  {
    EmployeeID: 24,
    FirstName: 'Byrd',
    LastName: 'Bailey',
    Country: 'Canada',
    Age: 20,
    RegistererDate: new Date(lastYear - 1, 7, 7),
    IsActive: false
  },
  {
    EmployeeID: 25,
    FirstName: 'Hardy',
    LastName: 'Terry',
    Country: 'USA',
    Age: 45,
    RegistererDate: new Date(lastYear - 1, 6, 1),
    IsActive: false
  },
  {
    EmployeeID: 26,
    FirstName: 'Millie',
    LastName: 'Boyd',
    Country: 'USA',
    Age: 28,
    RegistererDate: new Date(lastYear, 7, 7),
    IsActive: false
  },
  {
    EmployeeID: 27,
    FirstName: 'Rosa',
    LastName: 'Mercer',
    Country: 'Canada',
    Age: 25,
    RegistererDate: new Date(lastYear - 1, 8, 18),
    IsActive: true
  },
  {
    EmployeeID: 28,
    FirstName: 'Blair',
    LastName: 'Long',
    Country: 'Canada',
    Age: 21,
    RegistererDate: new Date(lastYear - 1, 9, 26),
    IsActive: false
  },
  {
    EmployeeID: 29,
    FirstName: 'Whitfield',
    LastName: 'Cherry',
    Country: 'USA',
    Age: 38,
    RegistererDate: new Date(lastYear - 1, 4, 25),
    IsActive: true
  },
  {
    EmployeeID: 30,
    FirstName: 'Cathryn',
    LastName: 'Hunt',
    Country: 'USA',
    Age: 26,
    RegistererDate: new Date(lastYear - 1, 6, 16),
    IsActive: true
  },
  {
    EmployeeID: 31,
    FirstName: 'Morris',
    LastName: 'Stout',
    Country: 'Italy',
    Age: 41,
    RegistererDate: new Date(lastYear - 1, 3, 26),
    IsActive: true
  },
  {
    EmployeeID: 32,
    FirstName: 'Vera',
    LastName: 'Richardson',
    Country: 'Canada',
    Age: 32,
    RegistererDate: new Date(lastYear - 1, 1, 2),
    IsActive: false
  },
  {
    EmployeeID: 33,
    FirstName: 'Shelton',
    LastName: 'Henderson',
    Country: 'Canada',
    Age: 53,
    RegistererDate: new Date(lastYear, 9, 6),
    IsActive: true
  },
  {
    EmployeeID: 34,
    FirstName: 'Jimmie',
    LastName: 'Cain',
    Country: 'USA',
    Age: 45,
    RegistererDate: new Date(lastYear, 6, 5),
    IsActive: true
  },
  {
    EmployeeID: 35,
    FirstName: 'Bryan',
    LastName: 'Bradshaw',
    Country: 'Canada',
    Age: 24,
    RegistererDate: new Date(lastYear - 1, 8, 2),
    IsActive: true
  },
  {
    EmployeeID: 36,
    FirstName: 'Decker',
    LastName: 'Kane',
    Country: 'Canada',
    Age: 29,
    RegistererDate: new Date(lastYear - 1, 6, 7),
    IsActive: false
  },
  {
    EmployeeID: 37,
    FirstName: 'Keisha',
    LastName: 'Phelps',
    Country: 'Canada',
    Age: 34,
    RegistererDate: new Date(lastYear - 1, 10, 11),
    IsActive: true
  },
  {
    EmployeeID: 38,
    FirstName: 'West',
    LastName: 'Frye',
    Country: 'Italy',
    Age: 40,
    RegistererDate: new Date(lastYear - 1, 6, 25),
    IsActive: false
  }
];
