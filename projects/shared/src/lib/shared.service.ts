import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  updateData(data: any) {
    this.dataSubject.next(data);
  }

  testName(name:string){
    return `hello ${name}`
  }
}
