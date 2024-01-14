export default function remap(
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number,
) {
  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
}
