import { signUpHandler } from "next-auth-sanity";
import { sanityClient } from "@/service/sanity";

export const POST = signUpHandler(sanityClient);
