import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public start() {
    new Tone.Oscillator({
			"type" : "square",
			"frequency" : 440,
			"volume" : 1
		}).toMaster().start();
  }

}
