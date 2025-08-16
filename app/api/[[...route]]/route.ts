// app/api/[[...route]]/route.ts
import { Hono } from "hono"
import { handle } from "hono/vercel"
import { z } from "zod"
import { zValidator } from "@hono/zod-validator"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"

export const runtime = "edge" // run on Vercel/Next Edge runtime

// Optional: keep Hono paths aligned with /api/*
const app = new Hono().basePath("/api")

// e.g. GET /api/health
app.get(
  "/hello/:test",
  clerkMiddleware(),
  zValidator("param", z.object({ test: z.string() })),
  (c) => {
    const { test } = c.req.valid("param")
    const auth = getAuth(c)
    if (!auth?.userId) {
      return c.json({ ok: false, message: "Unauthorised" })
    }
    return c.json({ ok: true, test, userId: auth?.userId })
  }
)

// e.g. POST /api/transactions
app.post("/transactions", async (c) => {
  const body = await c.req.json()
  // ...do work...
  return c.json({ created: true, body }, 201)
})

// Next needs handlers per HTTP method:
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
export const OPTIONS = handle(app)
