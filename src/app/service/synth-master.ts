
import * as Tone from 'tone';

export class SynthMaster {

  private oscillator;
  private ampEnvelope;
  private gainNode;
  private filter;

  private playing = false;

  private static HALF_SHIFT: number = Math.pow(2, 1 / 12);

  constructor() {
    this.initialize();
  }

  public play() {
    this.oscillator.start();
  }

  public key() {

    this.oscillator.frequency.value = 50;

    if (this.playing) {
      this.playing = false;
      this.ampEnvelope.triggerRelease();
    } else {
      this.playing = true;
      this.ampEnvelope.triggerAttack();
    }
  }

  public shiftFrequency(currentFrequency: number, halfNotesToShift: number) {
    return currentFrequency * Math.pow(SynthMaster.HALF_SHIFT, halfNotesToShift);
  }

  private initialize() {
    this.oscillator = new Tone.Oscillator("C#4", "sine");

    this.ampEnvelope = new Tone.AmplitudeEnvelope({
      "attack": 0.1,
      "decay": 0.2,
      "sustain": 0.5,
      "release": 0.8,
    });

    this.oscillator.connect(this.ampEnvelope);


    this.ampEnvelope.toMaster();
  }



}