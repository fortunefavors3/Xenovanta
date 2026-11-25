export type DemoGame = {
  code: string;
  title: string;
  category: "Slots" | "Arcade" | "Table";
  enabled: boolean;
};

export type DemoCatalogResponse = {
  mode: "demo-only";
  currency: "DEMO";
  redeemable: false;
  games: DemoGame[];
};
