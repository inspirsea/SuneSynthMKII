import { Component, OnInit, HostListener } from '@angular/core';
import { SynthMaster } from 'src/app/service/synth-master';
import { FrequencyTable } from 'src/app/service/frequency-table';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {

  private master: SynthMaster;
  private frequencyTable: FrequencyTable;
  private currentKey = '';

  @HostListener('document:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if(this.currentKey !== event.key) {
      this.master.trigger(this.frequencyTable.getFrequencyOfKey(event.key));
    }

    this.currentKey = event.key;
  }

  @HostListener('document:keyup', ['$event'])
  keyUp() {
    this.master.release();
    this.currentKey = '';
  }

  constructor() { }

  ngOnInit() {
    this.master = new SynthMaster();
    this.frequencyTable = new FrequencyTable();
  }

  public trigger() {
  }

}
