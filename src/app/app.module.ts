import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SynthComponent } from './components/synth/synth.component';
import { OcillatorComponent } from './components/ocillator/ocillator.component';
import { FaderComponent } from './components/fader/fader.component';
import { KnobComponent } from './components/knob/knob.component';

@NgModule({
  declarations: [
    AppComponent,
    SynthComponent,
    OcillatorComponent,
    FaderComponent,
    KnobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
