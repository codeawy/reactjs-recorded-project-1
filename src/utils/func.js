export const txtCutterWithDots = (txt, max) => {
  if (txt.length > max) return txt.slice(0, max) + "...";
  return txt;
};

export function numberWithCommas(x) {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
