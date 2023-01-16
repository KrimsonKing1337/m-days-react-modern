export default function twoDigitsAlways(digit) {
  return digit < 10 ? `0${digit}` : digit;
}
