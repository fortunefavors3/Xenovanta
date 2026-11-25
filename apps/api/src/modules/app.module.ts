
import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";
import { DemoController } from "./demo.controller";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [HealthController, DemoController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
