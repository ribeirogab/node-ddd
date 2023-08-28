import { AnswersRepository } from '../repositories';
import { AnswerQuestionUseCase } from './answer-question';

const makeAnswersRepository = (): AnswersRepository => ({
  create: async () => {},
});

const makeSut = () => {
  const answersRepository = makeAnswersRepository();
  const sut = new AnswerQuestionUseCase(answersRepository);

  return { sut, answersRepository };
};

describe('domain/use-cases/answer-question', () => {
  it('create an answer', async () => {
    const { sut } = makeSut();

    const answer = await sut.execute({
      content: 'Nova resposta',
      instructorId: '1',
      questionId: '1',
    });

    expect(answer.content).toEqual('Nova resposta');
  });
});
