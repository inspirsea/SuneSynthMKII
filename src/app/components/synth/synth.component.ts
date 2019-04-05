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

  @HostListener('document:keydown', ['$event'])
  keyDown(event: KeyboardEvent) { 
    this.master.trigger(this.frequencyTable.getFrequencyOfKey(event.key));
  }

  @HostListener('document:keyup', ['$event'])
  keyUp() { 
    this.master.release();
  }
  

  constructor() { }

  ngOnInit() {
    this.master = new SynthMaster();
    this.frequencyTable = new FrequencyTable();
  }

  public trigger() {
  }

}
