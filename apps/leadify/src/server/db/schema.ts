import { createId } from "@paralleldrive/cuid2";
import { relations, sql } from "drizzle-orm";
import {
  boolean,
  decimal,
  int,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";

const CUID_LENGTH = 128;

// id: varchar("id", { length: CUID_LENGTH })
//   .primaryKey()
//   .$defaultFn(() => createId()),

export const TableQnas = mySqlTable("qna", {
  id: int("id").primaryKey().autoincrement(),

  question: text("body").notNull(),
  studentId: varchar("studentId", { length: CUID_LENGTH }),
  telegramStudentId: varchar("telegram_studentId", { length: CUID_LENGTH }),

  answer: text("body"),
  mentorId: varchar("studentId", { length: CUID_LENGTH }),
  telegramMentorId: varchar("telegram_mentorId", { length: CUID_LENGTH }),

  isDeleted: boolean("isSent").default(false),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  createdBy: varchar("createdBy", { length: CUID_LENGTH }).notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
  updatedBy: varchar("updatedBy", { length: CUID_LENGTH }).notNull(),
});

export const TableQnasHistory = mySqlTable("qna_history", {
  id: varchar("id", { length: CUID_LENGTH })
    .primaryKey()
    .$defaultFn(() => createId()),

  qnaId: int("qna_id"),
  versionNumber: int("version_number"),

  question: text("body").notNull(),
  studentId: varchar("studentId", { length: CUID_LENGTH }),
  telegramStudentId: varchar("telegram_studentId", { length: CUID_LENGTH }),

  answer: text("body"),
  mentorId: varchar("studentId", { length: CUID_LENGTH }),
  telegramMentorId: varchar("telegram_mentorId", { length: CUID_LENGTH }),

  isDeleted: boolean("is_deleted").default(false),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  createdBy: varchar("createdBy", { length: CUID_LENGTH }).notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
  updatedBy: varchar("updatedBy", { length: CUID_LENGTH }).notNull(),
});

// просто для рассылок, не надо делать relation
export const TableUsers = mySqlTable("users", {
  id: varchar("studentId", { length: CUID_LENGTH }).primaryKey(),

  isMentor: boolean("is_mentor").default(false),
  isAdmin: boolean("is_admin").default(false),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  createdBy: varchar("createdBy", { length: CUID_LENGTH }).notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
  updatedBy: varchar("updatedBy", { length: CUID_LENGTH }).notNull(),
});
