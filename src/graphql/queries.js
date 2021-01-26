/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLevel = /* GraphQL */ `
  query GetLevel($id: ID!) {
    getLevel(id: $id) {
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
export const listLevels = /* GraphQL */ `
  query ListLevels(
    $filter: ModelLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTutor = /* GraphQL */ `
  query GetTutor($id: ID!) {
    getTutor(id: $id) {
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
export const listTutors = /* GraphQL */ `
  query ListTutors(
    $filter: ModelTutorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTutorSubjectJoin = /* GraphQL */ `
  query GetTutorSubjectJoin($id: ID!) {
    getTutorSubjectJoin(id: $id) {
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
export const listTutorSubjectJoins = /* GraphQL */ `
  query ListTutorSubjectJoins(
    $filter: ModelTutorSubjectJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutorSubjectJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subejct {
          id
          name
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubjectStudentJoin = /* GraphQL */ `
  query GetSubjectStudentJoin($id: ID!) {
    getSubjectStudentJoin(id: $id) {
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
export const listSubjectStudentJoins = /* GraphQL */ `
  query ListSubjectStudentJoins(
    $filter: ModelSubjectStudentJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjectStudentJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subejct {
          id
          name
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTutorStudentJoin = /* GraphQL */ `
  query GetTutorStudentJoin($id: ID!) {
    getTutorStudentJoin(id: $id) {
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
export const listTutorStudentJoins = /* GraphQL */ `
  query ListTutorStudentJoins(
    $filter: ModelTutorStudentJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutorStudentJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
