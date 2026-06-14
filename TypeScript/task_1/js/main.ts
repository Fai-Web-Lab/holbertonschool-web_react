// ============================================================================
// 1. Teacher & Directors Interfaces (From Previous Tasks)
// ============================================================================

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}


// ============================================================================
// 2. printTeacher Function and Interface
// ============================================================================

// Interface describing the function signature
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Concrete implementation of the function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


// ============================================================================
// 3. StudentClass Interfaces and Implementation
// ============================================================================

// Interface describing the constructor signature (Newable interface)
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the methods and properties inside the instance class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation matching the structure of StudentClassInterface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


// ============================================================================
// --- Verification Examples ---
// ============================================================================

// Testing printTeacher function
console.log("--- printTeacher Output ---");
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Testing StudentClass (Explicitly instantiating through the constructor signature)
console.log("--- StudentClass Output ---");
const Student: StudentConstructor = StudentClass; 
const studentInstance = new Student("Alice", "Smith");

console.log(studentInstance.displayName());    // Output: Alice
console.log(studentInstance.workOnHomework()); // Output: Currently working
