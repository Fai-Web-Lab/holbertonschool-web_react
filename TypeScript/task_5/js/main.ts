// ============================================================================
// 1. Branded Interfaces
// ============================================================================

export interface MajorCredits {
  credits: number;
  // Brand property uniquely identifying MajorCredits
  __brand: "MajorCredits.brand";
}

export interface MinorCredits {
  credits: number;
  // Brand property uniquely identifying MinorCredits
  __brand: "MinorCredits.brand";
}


// ============================================================================
// 2. Summation Functions
// ============================================================================

/**
 * Combines two MajorCredits subjects together.
 * Uses type assertion to safely attach the unique compile-time brand signature.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

/**
 * Combines two MinorCredits subjects together.
 * Uses type assertion to safely attach the unique compile-time brand signature.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}
