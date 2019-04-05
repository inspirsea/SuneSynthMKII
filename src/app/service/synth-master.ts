
import * as Tone from 'tone';

export class SynthMaster {

  private oscillator;
  private ampEnvelope;

  initialize() {
    this.oscillator = new Tone.Oscillator({
			"type" : "square",
			"frequency" : 440,
			"volume" : 1
    });
    
    let gainNode = Tone.context.createGain();
    
    this.ampEnvelope = new Tone.Envelope({
      "attack" : 0.1,
      "decay" : 0.2,
      "sustain" : 1,
      "release" : 0.8,
    });

    this.ampEnvelope.connect(gainNode.gain);

  }

}