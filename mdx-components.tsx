import type { MDXComponents } from "mdx/types";
import { Video } from "@/components/mdx/Video";
import { CsvQuiz } from "@/components/mdx/CsvQuiz";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Video,
    CsvQuiz,
    ...components,
  };
}
