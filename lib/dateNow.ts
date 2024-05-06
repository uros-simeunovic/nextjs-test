export const dateNow = () => {
  let dateNow = new Date(Date.now());
  dateNow.setTime(dateNow.getTime() - dateNow.getTimezoneOffset() * 60000);

  return dateNow.toISOString().substring(0, 19).split("T")[0];
};
