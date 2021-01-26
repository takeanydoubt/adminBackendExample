/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject {
    onCreateSubject {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject {
    onUpdateSubject {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject {
    onDeleteSubject {
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
export const onCreateLevel = /* GraphQL */ `
  subscription OnCreateLevel {
    onCreateLevel {
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
export const onUpdateLevel = /* GraphQL */ `
  subscription OnUpdateLevel {
    onUpdateLevel {
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
export const onDeleteLevel = /* GraphQL */ `
  subscription OnDeleteLevel {
    onDeleteLevel {
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
export const onCreateTutor = /* GraphQL */ `
  subscription OnCreateTutor {
    onCreateTutor {
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
export const onUpdateTutor = /* GraphQL */ `
  subscription OnUpdateTutor {
    onUpdateTutor {
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
export const onDeleteTutor = /* GraphQL */ `
  subscription OnDeleteTutor {
    onDeleteTutor {
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
export const onCreateTutorSubjectJoin = /* GraphQL */ `
  subscription OnCreateTutorSubjectJoin {
    onCreateTutorSubjectJoin {
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
export const onUpdateTutorSubjectJoin = /* GraphQL */ `
  subscription OnUpdateTutorSubjectJoin {
    onUpdateTutorSubjectJoin {
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
export const onDeleteTutorSubjectJoin = /* GraphQL */ `
  subscription OnDeleteTutorSubjectJoin {
    onDeleteTutorSubjectJoin {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateSubjectStudentJoin = /* GraphQL */ `
  subscription OnCreateSubjectStudentJoin {
    onCreateSubjectStudentJoin {
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
export const onUpdateSubjectStudentJoin = /* GraphQL */ `
  subscription OnUpdateSubjectStudentJoin {
    onUpdateSubjectStudentJoin {
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
export const onDeleteSubjectStudentJoin = /* GraphQL */ `
  subscription OnDeleteSubjectStudentJoin {
    onDeleteSubjectStudentJoin {
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
export const onCreateTutorStudentJoin = /* GraphQL */ `
  subscription OnCreateTutorStudentJoin {
    onCreateTutorStudentJoin {
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
export const onUpdateTutorStudentJoin = /* GraphQL */ `
  subscription OnUpdateTutorStudentJoin {
    onUpdateTutorStudentJoin {
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
export const onDeleteTutorStudentJoin = /* GraphQL */ `
  subscription OnDeleteTutorStudentJoin {
    onDeleteTutorStudentJoin {
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
