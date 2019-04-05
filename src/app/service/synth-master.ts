
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

  private initialize() {
    this.oscillator = new Tone.Oscillator(440, 'sine');

    this.ampEnvelope = new Tone.AmplitudeEnvelope({
      attack: 0.1,
      decay: 0.2,
      sustain: 0.5,
      release: 0.8,
    });

    this.filter = new Tone.Filter(500, 'highpass');

    this.oscillator.connect(this.filter);
    this.filter.connect(this.ampEnvelope);

    this.ampEnvelope.toMaster();
  }

  private startOscillators() {
    if (this.oscillator.state !== 'started') {
      this.oscillator.start();
    }
  }

}