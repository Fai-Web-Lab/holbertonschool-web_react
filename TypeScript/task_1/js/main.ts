interface Teacher {
  readonly firstName: string;        // Can only be set during initialization
  readonly lastName: string;         // Can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;        // Optional attribute
  location: string;
  [propName: string]: any;           // Allows any additional property of any type
}

// 2. Define the Directors interface by extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;           // Required attribute for directors
}

// --- Verification Examples ---

// Teacher instance example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Director instance example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Teacher Example:");
console.log(teacher3);

console.log("Director Example:");
console.log(director1);
