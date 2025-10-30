import Decimal from "decimal.js";

export const ensure_decimal = (value: string | number) => {
  try {
    return Decimal(value);
  } catch (error) {
    return Decimal("0");
  }
};
