export type SortOption =
  | "PRICE_LOW_HIGH"
  | "PRICE_HIGH_LOW"
  | "NAME_A_Z"
  | "NAME_Z_A";

export interface FilterState {
  search: string;
  category: string | null;
  sort: SortOption | null;
}
