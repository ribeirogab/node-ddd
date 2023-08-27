import { Slug } from './value-objects';
import { UniqueEntityId } from '@/core/entities';
import { Entity } from '@/core/entities/entity';

type QuestionProps = {
  bestAnswerId?: UniqueEntityId;
  authorId: UniqueEntityId;
  createdAt: Date;
  updateAt?: Date;
  content: string;
  title: string;
  slug?: Slug;
};

export class Question extends Entity<QuestionProps> {
  get bestAnswerId() {
    return this.props.bestAnswerId;
  }

  get authorId() {
    return this.props.authorId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updateAt() {
    return this.props.updateAt;
  }

  get content() {
    return this.props.content;
  }

  get title() {
    return this.props.title;
  }

  get slug() {
    return this.props.slug;
  }

  get excerpt() {
    return this.props.content.substring(0, 120).trimEnd().concat('...');
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  set title(title: string) {
    this.props.title = title;
    this.touch();
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined) {
    this.props.bestAnswerId = bestAnswerId;
    this.touch();
  }

  static create(props: Optional<QuestionProps, 'createdAt' | 'slug'>) {
    const question = new Question({
      ...props,
      slug: props.slug ?? Slug.createFromText(props.title),
      createdAt: new Date(),
    });

    return question;
  }

  private touch() {
    this.props.updateAt = new Date();
  }
}
