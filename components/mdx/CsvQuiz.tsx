"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface CsvQuizProps {
  csvFile: string;
  title?: string;
}

interface Question {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

// Compat shim for cognition-university's <CsvQuiz csvFile="foo.csv" />.
// Reads CSVs from /public/quizzes/ with columns:
//   question, answer_index, answer_explanation, a, b, c, d
export function CsvQuiz({ csvFile, title }: CsvQuizProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`/quizzes/${csvFile}`)
      .then((r) => r.text())
      .then((csv) => setQuestions(parseCsv(csv)))
      .catch(() => setQuestions([]));
  }, [csvFile]);

  if (questions.length === 0) return null;

  const score = questions.filter((q, i) => answers[i] === q.answerIndex).length;

  return (
    <div className="my-8 rounded-lg border border-border bg-surface p-6">
      {title && <h3 className="mb-4 text-xl font-semibold">{title}</h3>}

      {questions.map((q, qi) => {
        const selected = answers[qi];
        const correct = selected === q.answerIndex;
        return (
          <div key={qi} className="mb-6 last:mb-0">
            <div className="mb-3 font-medium text-text">
              {qi + 1}. {q.question}
            </div>
            <div className="flex flex-col gap-2">
              {q.options.map((opt, oi) => {
                const isSelected = selected === oi;
                const isAnswer = oi === q.answerIndex;
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={clsx(
                      "rounded-md border px-4 py-2.5 text-left text-sm transition-colors",
                      submitted && isAnswer && "border-success bg-success/10",
                      submitted && isSelected && !isAnswer && "border-red-400 bg-red-400/10",
                      !submitted && isSelected && "border-primary bg-lavender",
                      !submitted && !isSelected && "border-border hover:border-border-strong",
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div
                className={clsx(
                  "mt-2 text-sm",
                  correct ? "text-success" : "text-text-secondary",
                )}
              >
                {correct ? "Correct. " : "Not quite. "}
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check answers
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <div className="font-semibold text-text">
            Score: {score} / {questions.length}
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setAnswers({});
            }}
            className="text-sm text-primary hover:underline"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

function parseCsv(csv: string): Question[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];

  // Naive CSV parse — handles quoted fields with commas.
  const parseLine = (line: string): string[] => {
    const out: string[] = [];
    let cur = "";
    let inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuote && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuote = !inQuote;
        }
      } else if (ch === "," && !inQuote) {
        out.push(cur);
        cur = "";
      } else {
        cur += ch;
      }
    }
    out.push(cur);
    return out;
  };

  const header = parseLine(lines[0]);
  const col = (name: string) => header.indexOf(name);
  const qCol = col("question");
  const ansCol = col("answer_index");
  const explCol = col("answer_explanation");
  const optCols = ["a", "b", "c", "d"].map(col).filter((i) => i >= 0);

  return lines.slice(1).map((line) => {
    const cells = parseLine(line);
    return {
      question: cells[qCol] ?? "",
      answerIndex: parseInt(cells[ansCol] ?? "0", 10),
      explanation: cells[explCol] ?? "",
      options: optCols.map((i) => cells[i] ?? "").filter(Boolean),
    };
  });
}
