import { CourseRepository } from '../repositories/course';
import { Course } from '../../model/course';

describe("Course Repository", () => {
  var repository: CourseRepository;

  beforeEach(() => repository = new CourseRepository())

  it("starts empty", () => {
    expect(repository.getAll().length).toBe(0);
  })

  it("can register a new course", () => {
    var course: Course = new Course();
    course.name = "Test Course";
    course.price = 100;
    repository.insert(course);

    expect(repository.getAll().length).toBe(1);
    course = repository.getAll()[0];
    expect(course.name).toBe("Test Course");
    expect(course.price).toBe(100);
    expect(course.description).toBe("");
    expect(course.modules.length).toBe(0);
  })

})
