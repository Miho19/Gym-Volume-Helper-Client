export function convertDateToInputStringFormat(dateIn: string) {
  const dateObject = new Date(dateIn);
  const timezoneOffset =
    dateObject.getTime() - dateObject.getTimezoneOffset() * 60 * 1000;

  const ISOString = new Date(timezoneOffset).toISOString();

  const splitDate = ISOString.split("T");
  return splitDate[0];
}
