import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";
import { DemoController } from "./demo.controller";

@Module({
  controllers: [HealthController, DemoController],
})
export class AppModule {}
