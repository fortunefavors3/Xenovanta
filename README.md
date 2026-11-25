# Project Royale — multi-tenant gaming platform starter

A non-redeemable-credit prototype for an eventual regulated gaming platform and B2B platform product.

## Safety boundary
This starter is **demo-only**. It has no real-money deposits, wagering, cash-out, prize redemption, payment processor, identity verification vendor, geolocation vendor, or certified RNG. Demo credits have no monetary value and cannot be transferred or redeemed. Do not enable real-money gaming based on this scaffold.

## Stack
- `apps/web`: Next.js App Router + TypeScript + Tailwind
- `apps/api`: NestJS + TypeScript + Prisma
- `packages/contracts`: shared API contracts (reserved)
- PostgreSQL via Docker Compose for local development

## Requirements
- Node.js 22+
- pnpm 9+
- Docker Desktop (or compatible Docker engine)

## Run locally
1. Copy `.env.example` to `.env`.
2. Start PostgreSQL: `docker compose up -d db`
3. Install: `pnpm install`
4. Generate Prisma client: `pnpm --filter api db:generate`
5. Apply schema: `pnpm --filter api db:push`
6. Start both apps: `pnpm dev`

Web: http://localhost:3000  
API: http://localhost:4000/api/health

## Current demo features
- Original Project Royale landing page and game lobby
- Responsive player dashboard
- Demo-credit balance display
- One local demo slot interaction with no cash value
- NestJS health and demo catalog endpoints
- Tenant-aware schema foundation and append-only ledger model

## Important next engineering steps
1. Replace `db:push` with reviewed Prisma migrations before shared environments.
2. Add secure account registration, email verification, MFA, session rotation, rate limits, CSRF protections, and abuse controls.
3. Implement ledger posting as database transactions with immutable entries, idempotency keys, reconciliation, and independent review.
4. Add tenant isolation tests and authorization checks to every tenant-scoped API.
5. Select a jurisdiction only after specialist gaming counsel confirms the lawful operating and supplier/skin structure.
6. Obtain required operator/platform/vendor approvals, game certifications, security testing, and written payment-provider approval before any real-money feature is developed or activated.

## Deployment direction
For a prototype, use a managed Node host for the Next.js app and NestJS API, plus managed PostgreSQL. AWS App Runner is one possible API target; Next.js supports Node.js and Docker deployments. Keep secrets in the host's secret manager, not in source control. Do not deploy a public real-money service from this starter.

References:
- Next.js deployment: https://nextjs.org/docs/app/getting-started/deploying
- NestJS deployment: https://docs.nestjs.com/deployment
- AWS App Runner: https://docs.aws.amazon.com/apprunner/latest/dg/getting-started.html
