export const pushIfTruthy = (data: any, array: any[]) => {
  if (data) {
    array.push(data);
  }
};
