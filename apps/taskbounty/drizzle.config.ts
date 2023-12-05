import type { Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./schema/*",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: env.DATABASE_URL,
  },
  tablesFilter: ["taskbounty_*"],
} satisfies Config;
