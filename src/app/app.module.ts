import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SynthComponent } from './components/synth/synth.component';
import { OcillatorComponent } from './components/ocillator/ocillator.component';

@NgModule({
  declarations: [
    AppComponent,
    SynthComponent,
    OcillatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
