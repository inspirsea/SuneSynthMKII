import { Component, OnInit, HostListener } from '@angular/core';
import { SynthMaster } from 'src/app/service/synth-master';
import { FrequencyTable } from 'src/app/service/frequency-table';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {
  public attackValue = 0.1;
  public decayValue = 0.1;
  public sustainValue = 0.1;
  public releaseValue = 0.1;

  public frequency = 0;
  public res = 0;

  private master: SynthMaster;
  private frequencyTable: FrequencyTable;
  private currentKey = '';

  @HostListener('document:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (this.currentKey !== event.key) {
      const freq = this.frequencyTable.getFrequencyOfKey(event.key);

      if (freq) {
        this.master.trigger(freq);
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
    this.master = new SynthMaster();
    this.frequencyTable = new FrequencyTable();
  }

  public trigger() {
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

  public updateCutoff(): void {

  }

  private convertValue(value: number, max: number) {
    return max / 128 * value;
  }
}
