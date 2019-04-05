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

}
