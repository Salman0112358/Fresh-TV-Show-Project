function padNumberToTwoDigits(inputNumber: number): string {
  if (inputNumber < 0) {
    return "error";
  } else if (inputNumber < 10) {
    return `0${inputNumber}`;
  } else if (inputNumber >= 10) {
    return `${inputNumber}`;
  } else {
    return "null";
  }
}
export default padNumberToTwoDigits;
