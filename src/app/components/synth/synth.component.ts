import { Component, OnInit, HostListener } from '@angular/core';
import { SynthMaster } from 'src/app/service/synth-master';
import { FrequencyTable } from 'src/app/service/frequency-table';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {
  public attackValue = 10;
  public decayValue = 10;
  public sustainValue = 10;
  public releaseValue = 10;

  public baseShift1 = 64;
  public baseShift2 = 64;

  public frequency = 10;
  public res = 0;

  private master: SynthMaster;
  private frequencyTable: FrequencyTable;
  private OSC1Wave = 0;
  private OSC2Wave = 0;

  private currentKey = '';

  @HostListener('document:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (this.currentKey !== event.key) {
      const freq = this.frequencyTable.getFrequencyOfKey(event.key, 0);
      const freq2 = this.frequencyTable.getFrequencyOfKey(event.key, 1);

      if (freq) {
        this.master.trigger(freq, freq2);
      }
    }

    this.currentKey = event.key;
  }

  @HostListener('document:keyup', ['$event'])
  keyUp(event: KeyboardEvent) {
    if (this.currentKey === event.key) {
      this.master.release();
      this.currentKey = '';
    }
  }

  constructor() { }

  ngOnInit() {
    this.frequencyTable = new FrequencyTable();
    this.master = new SynthMaster(this.frequencyTable);
  }

  public updateADSR(): void {

    const attack = this.convertValue(this.attackValue, 1);
    const decayValue = this.convertValue(this.decayValue, 1);
    const sustainValue = this.convertValue(this.sustainValue, 1);
    const releaseValue = this.convertValue(this.releaseValue, 1);

    this.master.updateADSR(attack, decayValue, sustainValue, releaseValue);
  }

  public updateRes(): void {

  }

  public updateBaseShift1() {
    // this.master.ip
  }

  public updateBaseShift2() {

  }

  public updateOSC1Wave() {
    this.master.updateOSC1Wave(this.OSC1Wave);
  }

  public updateOSC2Wave() {
    this.master.updateOSC2Wave(this.OSC2Wave);
  }

  public updateCutoff(): void {
    this.master.updateFilterCutoff(this.convertExponensial(this.frequency));
  }

  private convertValue(value: number, max: number) {
    return 0.01 + (max / 128 * value);
  }

  private convertExponensial(value: number) {
    const part = 0.01 + (1 / 128 * value);
    const exp = part * 150;
    return exp * exp;
  }
}
