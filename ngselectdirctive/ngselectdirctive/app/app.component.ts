/// <reference path="src/services/completer-service.ts" />



import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { Component, Input } from '@angular/core';


import { CompleterCmp } from './src/components/completer-cmp';
import { CompleterData } from './src/services/completer-data';
import { CompleterService } from './src/services/completer-service'; 
@Component({
    selector: 'my-app',
    template: `<h1>Search color</h1>
            <ng2-completer [(ngModel)]="searchStr" [dataService]="dataService" [minSearchLength]="1"></ng2-completer>`
})
export class AppComponent {
    private searchStr: string;
  private dataService:  CompleterData;
    private searchData = [
        { color: 'red', value: '#f00' },
        { color: 'green', value: '#0f0' },
        { color: 'blue', value: '#00f' },
        { color: 'cyan', value: '#0ff' },
        { color: 'magenta', value: '#f0f' },
        { color: 'yellow', value: '#ff0' },
        { color: 'black', value: '#000' }
    ];

    constructor(private completerService: CompleterService) {
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }

}