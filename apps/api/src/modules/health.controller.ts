import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: "ok",
      service: "project-royale-api",
      mode: "demo-only",
      timestamp: new Date().toISOString(),
    };
  }
}
