export class Utils {

  private static HALF_SHIFT: number = Math.pow(2, 1 / 12);

  public static shiftFrequency(currentFrequency: number, halfNotesToShift: number) {
    return currentFrequency * Math.pow(this.HALF_SHIFT, halfNotesToShift);
  }

}