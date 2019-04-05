import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { SynthMaster } from 'src/app/service/synth-master';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {

  private master: SynthMaster;

  public attackValue = 0;
  public delayValue = 0;
  public sustainValue = 0;
  public releaseValue = 0;

  public frequency = 0;
  public res = 0;

  constructor() { }

  ngOnInit() {
    this.master = new SynthMaster();
  }

  public start() {
    this.master.play();
  }

  public trigger() {
    this.master.key();
  }

  public updateADSR(): void {

  }

  public updateRes(): void {

  }

  public updateCutoff(): void {

  }
}
