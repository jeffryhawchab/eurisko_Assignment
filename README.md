# Academy Assignments - TypeScript Solutions

## Overview
This project contains solutions for multiple coding challenges written in TypeScript. Each challenge is implemented as a separate function and demonstrates efficient problem-solving techniques.

## Challenges & Solutions

### 1. Reverse a String
**Description:**
Reverses a given string.

**Code Implementation:**
```typescript
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
```

### 2. Count Vowels
**Description:**
Counts the number of vowels (a, e, i, o, u) in a given string.

**Code Implementation:**
```typescript
function countVowels(str: string): number {
  return (str.match(/[aeiou]/gi) || []).length;
}
```

### 3. Find the Missing Number
**Description:**
Finds the missing number in an array of numbers from 1 to N.

**Code Implementation:**
```typescript
function findMissingNumber(arr: number[]): number {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
```

### 4. Find the First Non-Repeating Character
**Description:**
Returns the first non-repeating character in a string.

**Code Implementation:**
```typescript
function firstNonRepeatingChar(str: string): string | null {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
```

### 5. Deep Object Comparison
**Description:**
Compares two objects deeply for equality.

**Code Implementation:**
```typescript
function deepEqual(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
```

### 6. LRU Cache Implementation
**Description:**
Implements an LRU (Least Recently Used) Cache with `get(key)` and `put(key, value)` operations.

**Code Implementation:**
```typescript
class LRUCache {
  private cache: Map<number, number>;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number | null {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.capacity) this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }
}
```

### 7. TypeScript Task Manager
**Description:**
Implements a simple task manager with functions to add, complete, and display tasks.

**Code Implementation:**
```typescript
class TaskManager {
  private tasks: { id: number; name: string; status: string }[] = [];
  private currentId: number = 1;

  addTask(name: string): void {
    this.tasks.push({ id: this.currentId++, name, status: "Pending" });
  }

  completeTask(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.status = "Completed";
  }

  displayTasks(): void {
    console.log(this.tasks);
  }
}
```

## How to Run
### Option 1: Compile TypeScript to JavaScript
1. Install TypeScript (if not installed):
   ```sh
   npm install -g typescript
   ```
2. Compile the TypeScript file:
   ```sh
   tsc filename.ts
   ```
3. Run the generated JavaScript file:
   ```sh
   node filename.js
   ```

### Option 2: Run TypeScript Directly with ts-node
1. Install ts-node (if not installed):
   ```sh
   npm install -g ts-node
   ```
2. Run the TypeScript file:
   ```sh
   ts-node filename.ts
   ```

## Notes
- This project is written in TypeScript for type safety.
- Each challenge solution is stored in a separate file.
- Solutions are optimized for readability and performance.
