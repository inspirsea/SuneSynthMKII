
import * as Tone from 'tone';

export class SynthMaster {

  private oscillator;
  private ampEnvelope;
  private filter;

  constructor() {
    this.initialize();
  }

  public trigger(frequency: number) {

    this.startOscillators();

    this.oscillator.frequency.value = frequency;
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
    this.oscillator.wave = this.getWave(value);
  }

  private initialize() {
    this.oscillator = new Tone.Oscillator(440, 'sine');

    this.ampEnvelope = new Tone.AmplitudeEnvelope({
      attack: 0.1,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1,
    });

    this.filter = new Tone.Filter(1, 'lowpass');

    this.oscillator.connect(this.filter);
    this.filter.connect(this.ampEnvelope);

    this.ampEnvelope.toMaster();
  }

  private startOscillators() {
    if (this.oscillator.state !== 'started') {
      this.oscillator.start();
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