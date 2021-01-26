/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      name
      subjects {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      name
      subjects {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      name
      subjects {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
      id
      name
      course {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      level {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      tutors {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
      id
      name
      course {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      level {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      tutors {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
      id
      name
      course {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      level {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      tutors {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLevel = /* GraphQL */ `
  mutation CreateLevel(
    $input: CreateLevelInput!
    $condition: ModelLevelConditionInput
  ) {
    createLevel(input: $input, condition: $condition) {
      id
      name
      subjects {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLevel = /* GraphQL */ `
  mutation UpdateLevel(
    $input: UpdateLevelInput!
    $condition: ModelLevelConditionInput
  ) {
    updateLevel(input: $input, condition: $condition) {
      id
      name
      subjects {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLevel = /* GraphQL */ `
  mutation DeleteLevel(
    $input: DeleteLevelInput!
    $condition: ModelLevelConditionInput
  ) {
    deleteLevel(input: $input, condition: $condition) {
      id
      name
      subjects {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTutor = /* GraphQL */ `
  mutation CreateTutor(
    $input: CreateTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    createTutor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      phone
      country
      date_birth
      gender
      ocupation
      education
      tutoring_preference
      subejcts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTutor = /* GraphQL */ `
  mutation UpdateTutor(
    $input: UpdateTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    updateTutor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      phone
      country
      date_birth
      gender
      ocupation
      education
      tutoring_preference
      subejcts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTutor = /* GraphQL */ `
  mutation DeleteTutor(
    $input: DeleteTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    deleteTutor(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      phone
      country
      date_birth
      gender
      ocupation
      education
      tutoring_preference
      subejcts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTutorSubjectJoin = /* GraphQL */ `
  mutation CreateTutorSubjectJoin(
    $input: CreateTutorSubjectJoinInput!
    $condition: ModelTutorSubjectJoinConditionInput
  ) {
    createTutorSubjectJoin(input: $input, condition: $condition) {
      id
      subejct {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          owner
        }
        level {
          id
          name
          createdAt
          updatedAt
        }
        tutors {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      tutor {
        id
        first_name
        last_name
        email
        phone
        country
        date_birth
        gender
        ocupation
        education
        tutoring_preference
        subejcts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTutorSubjectJoin = /* GraphQL */ `
  mutation UpdateTutorSubjectJoin(
    $input: UpdateTutorSubjectJoinInput!
    $condition: ModelTutorSubjectJoinConditionInput
  ) {
    updateTutorSubjectJoin(input: $input, condition: $condition) {
      id
      subejct {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          owner
        }
        level {
          id
          name
          createdAt
          updatedAt
        }
        tutors {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      tutor {
        id
        first_name
        last_name
        email
        phone
        country
        date_birth
        gender
        ocupation
        education
        tutoring_preference
        subejcts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTutorSubjectJoin = /* GraphQL */ `
  mutation DeleteTutorSubjectJoin(
    $input: DeleteTutorSubjectJoinInput!
    $condition: ModelTutorSubjectJoinConditionInput
  ) {
    deleteTutorSubjectJoin(input: $input, condition: $condition) {
      id
      subejct {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          owner
        }
        level {
          id
          name
          createdAt
          updatedAt
        }
        tutors {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      tutor {
        id
        first_name
        last_name
        email
        phone
        country
        date_birth
        gender
        ocupation
        education
        tutoring_preference
        subejcts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      date_birth
      phone
      country
      gender
      subjects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      tutors {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      date_birth
      phone
      country
      gender
      subjects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      tutors {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      date_birth
      phone
      country
      gender
      subjects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      tutors {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSubjectStudentJoin = /* GraphQL */ `
  mutation CreateSubjectStudentJoin(
    $input: CreateSubjectStudentJoinInput!
    $condition: ModelSubjectStudentJoinConditionInput
  ) {
    createSubjectStudentJoin(input: $input, condition: $condition) {
      id
      subejct {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          owner
        }
        level {
          id
          name
          createdAt
          updatedAt
        }
        tutors {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        first_name
        last_name
        email
        date_birth
        phone
        country
        gender
        subjects {
          nextToken
        }
        tutors {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSubjectStudentJoin = /* GraphQL */ `
  mutation UpdateSubjectStudentJoin(
    $input: UpdateSubjectStudentJoinInput!
    $condition: ModelSubjectStudentJoinConditionInput
  ) {
    updateSubjectStudentJoin(input: $input, condition: $condition) {
      id
      subejct {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          owner
        }
        level {
          id
          name
          createdAt
          updatedAt
        }
        tutors {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        first_name
        last_name
        email
        date_birth
        phone
        country
        gender
        subjects {
          nextToken
        }
        tutors {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubjectStudentJoin = /* GraphQL */ `
  mutation DeleteSubjectStudentJoin(
    $input: DeleteSubjectStudentJoinInput!
    $condition: ModelSubjectStudentJoinConditionInput
  ) {
    deleteSubjectStudentJoin(input: $input, condition: $condition) {
      id
      subejct {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          owner
        }
        level {
          id
          name
          createdAt
          updatedAt
        }
        tutors {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        first_name
        last_name
        email
        date_birth
        phone
        country
        gender
        subjects {
          nextToken
        }
        tutors {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTutorStudentJoin = /* GraphQL */ `
  mutation CreateTutorStudentJoin(
    $input: CreateTutorStudentJoinInput!
    $condition: ModelTutorStudentJoinConditionInput
  ) {
    createTutorStudentJoin(input: $input, condition: $condition) {
      id
      tutor {
        id
        first_name
        last_name
        email
        phone
        country
        date_birth
        gender
        ocupation
        education
        tutoring_preference
        subejcts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        first_name
        last_name
        email
        date_birth
        phone
        country
        gender
        subjects {
          nextToken
        }
        tutors {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTutorStudentJoin = /* GraphQL */ `
  mutation UpdateTutorStudentJoin(
    $input: UpdateTutorStudentJoinInput!
    $condition: ModelTutorStudentJoinConditionInput
  ) {
    updateTutorStudentJoin(input: $input, condition: $condition) {
      id
      tutor {
        id
        first_name
        last_name
        email
        phone
        country
        date_birth
        gender
        ocupation
        education
        tutoring_preference
        subejcts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        first_name
        last_name
        email
        date_birth
        phone
        country
        gender
        subjects {
          nextToken
        }
        tutors {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTutorStudentJoin = /* GraphQL */ `
  mutation DeleteTutorStudentJoin(
    $input: DeleteTutorStudentJoinInput!
    $condition: ModelTutorStudentJoinConditionInput
  ) {
    deleteTutorStudentJoin(input: $input, condition: $condition) {
      id
      tutor {
        id
        first_name
        last_name
        email
        phone
        country
        date_birth
        gender
        ocupation
        education
        tutoring_preference
        subejcts {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        first_name
        last_name
        email
        date_birth
        phone
        country
        gender
        subjects {
          nextToken
        }
        tutors {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
