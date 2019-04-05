
import * as Tone from 'tone';
import { FrequencyTable } from './frequency-table';

export class SynthMaster {

  private oscillator;
  private oscillator2;
  private ampEnvelope;
  private filter;
  private frequencyTable;

  constructor(frequencyTable: FrequencyTable) {
    this.initialize();
  }

  public trigger(frequency: number, frequency2: number) {

    this.startOscillators();

    this.oscillator.frequency.value = frequency;
    this.oscillator2.frequency.value = frequency2;
    this.ampEnvelope.triggerAttack();
  }

  public release() {
    this.ampEnvelope.triggerRelease();
  }

  public updateADSR(attack: number, decay: number, sustain: number, release: number) {
    this.ampEnvelope.attack = attack;
    this.ampEnvelope.decay = decay;
    this.ampEnvelope.sustain = sustain;
    this.ampEnvelope.release = release;
  }

  public updateFilterCutoff(value: number) {
    this.filter.frequency.value = value;
  }

  public updateOSC1Wave(value: number) {
    this.oscillator.type = this.getWave(value);
  }

  public updateOSC2Wave(value: number) {
    this.oscillator2.type = this.getWave(value);
  }

  public setBaseShift() {
    
  }

  private initialize() {
    this.oscillator = new Tone.Oscillator(440, 'sine');
    this.oscillator2 = new Tone.Oscillator(440, 'sine');

    this.ampEnvelope = new Tone.AmplitudeEnvelope({
      attack: 0.1,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1,
    });

    this.filter = new Tone.Filter(1, 'lowpass');

    this.oscillator.connect(this.filter);
    this.oscillator2.connect(this.filter);
    this.filter.connect(this.ampEnvelope);

    this.ampEnvelope.toMaster();
  }

  private startOscillators() {
    if (this.oscillator.state !== 'started') {
      this.oscillator.start();
      this.oscillator2.start();
    }
  }

  private getWave(value: number) {

    let result = 'sine';

    switch (value) {

      case 0: result = 'sine';
        break;

      case 1: result = 'triangle';
        break;

      case 2: result = 'square';
        break;

      case 3: result = 'sawtooth';
        break;
    }

    return result;
  }

}