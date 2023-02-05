import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export interface FirstTableItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: FirstTableItem[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
  {id: 11, name: 'Sodium'},
  {id: 12, name: 'Magnesium'},
  {id: 13, name: 'Aluminum'},
  {id: 14, name: 'Silicon'},
  {id: 15, name: 'Phosphorus'},
  {id: 16, name: 'Sulfur'},
  {id: 17, name: 'Chlorine'},
  {id: 18, name: 'Argon'},
  {id: 19, name: 'Potassium'},
  {id: 20, name: 'Calcium'},
];
@Injectable({
  providedIn: 'root'
})
export class FirstTableService {
  data = [...EXAMPLE_DATA]
  constructor() { }

  getData(pageIndex:number,pageSize:number,active:string,direction:string){
    return this.getPagedData(this.getSortedData(active,direction),pageIndex,pageSize)
    // return of(EXAMPLE_DATA)
  }

   getPagedData(data:FirstTableItem[],pageIndex:number,pageSize:number): FirstTableItem[] {
    const startIndex = pageIndex * pageSize;
    return data.splice(startIndex, pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
   getSortedData(active:string,direction:string): FirstTableItem[] {
    if (!active || direction === '') {
      return this.data;
    }

    return this.data.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
