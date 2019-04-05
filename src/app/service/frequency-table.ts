import { SynthMaster } from './synth-master';
import { Utils } from '../Utils/utils';

export class FrequencyTable {

  private keyTable = {
    "a": 0,
    "s": 1,
    "d": 2,
    "f": 3,
    "g": 4,
    "h": 5,
    "j": 6,
    "k": 7,
    "l": 8,
    "ö": 9,
    "ä": 10,
    "'": 11
  };


  public getFrequencyOfKey(key: string) {

    let shift = this.keyTable[key];

    return Utils.shiftFrequency(440, shift);
  }
}
