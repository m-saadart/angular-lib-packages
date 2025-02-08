import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();
  private data: any;

  constructor() {}

  setData(data: any): void {
    this.dataSubject.next(data);
  }

  getData(): any {
    return this.dataSubject.value;
  }

  clearData(): void {
    this.dataSubject.next(null);
  }
}
