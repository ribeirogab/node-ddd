import { UniqueEntityId } from '@/core/entities';
import { Entity } from '@/core/entities/entity';

type AnswerProps = {
  questionId: UniqueEntityId;
  authorId: UniqueEntityId;
  content: string;
  createdAt: Date;
  updateAt?: Date;
};

export class Answer extends Entity<AnswerProps> {
  get questionId() {
    return this.props.questionId;
  }

  get authorId() {
    return this.props.authorId;
  }

  get content() {
    return this.props.content;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updateAt() {
    return this.props.updateAt;
  }

  get excerpt() {
    return this.props.content.substring(0, 120).trimEnd().concat('...');
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  static create(props: Optional<AnswerProps, 'createdAt'>) {
    const answer = new Answer({ ...props, createdAt: new Date() });

    return answer;
  }

  private touch() {
    this.props.updateAt = new Date();
  }
}
