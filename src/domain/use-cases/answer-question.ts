import { Answer } from '../entities/answer';
import { AnswersRepository } from '../repositories';
import { UniqueEntityId } from '@/core/entities';

type AnswerQuestionUseCaseDto = {
  instructorId: string;
  questionId: string;
  content: string;
};

export class AnswerQuestionUseCase {
  constructor(private readonly answersRepository: AnswersRepository) {}

  public async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseDto) {
    const answer = Answer.create({
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      content,
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}
