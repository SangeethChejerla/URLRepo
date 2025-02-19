import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const archive = pgTable('archive', {
  id: text('id').primaryKey(),
  url: text('url').notNull(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at').notNull()
});