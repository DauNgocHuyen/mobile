export function ConvertMoney(
  money: number | string | undefined
): string | undefined {
  return money?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
