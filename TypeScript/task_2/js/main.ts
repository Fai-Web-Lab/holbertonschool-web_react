// 1. Structural Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2. Class Implementations
class Director implements DirectorInterface {
  workFromHome(): string { return "Working from home"; }
  getCoffeeBreak(): string { return "Getting a coffee break"; }
  workDirectorTasks(): string { return "Getting to director tasks"; }
}

class Teacher implements TeacherInterface {
  workFromHome(): string { return "Cannot work from home"; }
  getCoffeeBreak(): string { return "Cannot have a break"; }
  workTeacherTasks(): string { return "Getting to work"; }
}

// 3. Factory Function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// 4. Type Guard Predicate & Worker Router Logic
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// 5. String Literal Types Strategy Configuration
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Global Verifications Output Checks
executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History
