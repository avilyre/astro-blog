import type { HTMLAttributes } from "astro/types";

export type Post = {
  title: string;
  thumbnail: HTMLAttributes<"img">;
  publishedAt: string;
  slug: string;
}