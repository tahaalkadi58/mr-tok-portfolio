export function formatDate(Date: Date) {
  if (isNaN(Date.getTime())) {
    throw new Error("Invalid Date format");
  }

  const day = Date.getDate();
  const month = Date.toLocaleString("en-US", {
    month: "short",
  });
  const year = Date.getFullYear();
  return [day, month, year];
}
