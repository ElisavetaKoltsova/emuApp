import { months } from "./const";

export const convertDate = (oldDate: string) => {
  const date = new Date(oldDate);

  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day} ${month}`;
};
