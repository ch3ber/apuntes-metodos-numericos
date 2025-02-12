import type { ImathMethod } from "@/pages/api/ImathMethod";

interface IParcial {
  id: number;
  title: string;
  description: string;
  content: ImathMethod[];
}