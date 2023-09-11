import { type Quiz } from "./types";
import { type ResponseQuiz } from "@/shared/api/quiz/types";

export const toDomain = (data: ResponseQuiz[]): Record<NonNullable<Quiz['id']>, Quiz> => data.reduce((prev, curr) => ({
    ...prev,
    [curr.id]: curr
}), {})