import { UserSession } from "@/model/user";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface Session {
    user: UserSession;
  }
}
