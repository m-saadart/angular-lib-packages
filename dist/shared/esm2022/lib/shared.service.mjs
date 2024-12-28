import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SharedService {
    dataSubject = new BehaviorSubject(null);
    data$ = this.dataSubject.asObservable();
    updateData(data) {
        this.dataSubject.next(data);
    }
    testName(name) {
        return `hello ${name}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SharedService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQvc3JjL2xpYi9zaGFyZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxhQUFhO0lBRWhCLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztJQUNyRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV4QyxVQUFVLENBQUMsSUFBUztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVc7UUFDbEIsT0FBTyxTQUFTLElBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUM7d0dBWFUsYUFBYTs0R0FBYixhQUFhLGNBRlosTUFBTTs7NEZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgZGF0YVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgZGF0YSQgPSB0aGlzLmRhdGFTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICB1cGRhdGVEYXRhKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5kYXRhU3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdGVzdE5hbWUobmFtZTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGBoZWxsbyAke25hbWV9YFxyXG4gIH1cclxufVxyXG4iXX0=