import * as i0 from "@angular/core";
export declare class SharedService {
    private dataSubject;
    data$: import("rxjs").Observable<any>;
    updateData(data: any): void;
    testName(name: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SharedService>;
}
