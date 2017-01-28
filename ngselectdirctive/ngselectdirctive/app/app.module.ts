

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ng2CompleterModule } from './src/ng2-completer.module';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule,
        Ng2CompleterModule,
        ReactiveFormsModule],

    declarations: [AppComponent,


    ],

    bootstrap: [AppComponent]
   
})
export class AppModule {
}
