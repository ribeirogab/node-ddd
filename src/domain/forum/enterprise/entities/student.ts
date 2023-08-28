import { Entity } from '@/core/entities/entity';

type StudentProps = {
  name: string;
};

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name;
  }

  static create(props: StudentProps) {
    const student = new Student(props);

    return student;
  }
}
