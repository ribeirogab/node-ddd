import { UniqueEntityId } from './unique-entity-id';

export class Entity<Props> {
  protected props: Omit<Props, 'id'>;
  private _id: UniqueEntityId;

  protected constructor({ id, ...props }: Props & { id?: string }) {
    this._id = new UniqueEntityId(id);
    this.props = props;
  }

  get id() {
    return this._id;
  }
}
