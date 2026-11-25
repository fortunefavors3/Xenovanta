import { Controller, Get } from "@nestjs/common";

const catalog = [
  { code: "royal-reels", title: "Royal Reels", category: "Slots", enabled: true },
  { code: "neon-nights", title: "Neon Nights", category: "Slots", enabled: true },
  { code: "lucky-lantern", title: "Lucky Lantern", category: "Arcade", enabled: true },
  { code: "golden-vault", title: "Golden Vault", category: "Table", enabled: true },
  { code: "cosmic-cascade", title: "Cosmic Cascade", category: "Arcade", enabled: true },
  { code: "crown-club", title: "Crown Club", category: "Table", enabled: true }
];

@Controller("demo")
export class DemoController {
  @Get("catalog")
  getCatalog() {
    return {
      mode: "demo-only",
      currency: "DEMO",
      redeemable: false,
      games: catalog
    };
  }
}
