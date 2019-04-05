import { Component, OnInit, HostListener } from '@angular/core';
import * as Tone from 'tone';
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

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.master.trigger(this.frequencyTable.getFrequencyOfKey(event.key));
  }

  constructor() { }

  ngOnInit() {
    this.master = new SynthMaster();
    this.frequencyTable = new FrequencyTable();
  }

  public trigger() {
  }

}
