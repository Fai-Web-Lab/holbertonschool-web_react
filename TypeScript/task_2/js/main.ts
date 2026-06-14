// ============================================================================
// 1. Structural Interfaces
// ============================================================================

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


// ============================================================================
// 2. Class Implementations
// ============================================================================

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}


// ============================================================================
// 3. Factory Function Configuration
// ============================================================================

/**
 * Creates an employee instance based on their salary tier threshold.
 * * @param salary - Can accept either an explicit number metric value or a string.
 * @returns An instance matching the DirectorInterface or TeacherInterface blueprint.
 */
function createEmployee(salary: number | string): Director | Teacher {
  // If the passed argument value is a number and strictly under 500
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  // Otherwise (for strings or numbers >= 500), return a Director
  return new Director();
}


// ============================================================================
// --- Verification Execution ---
// ============================================================================

console.log(createEmployee(200));   // Output: Teacher class instance object
console.log(createEmployee(1000));  // Output: Director class instance object
console.log(createEmployee('$500')); // Output: Director class instance object
