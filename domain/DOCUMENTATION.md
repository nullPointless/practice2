# Domain Layer Documentation

This document provides comprehensive documentation for the domain entities and interfaces defined in the domain layer of the application.

## Overview

The domain layer contains the core business logic and entities of the application. It includes:

- **Entities**: Object-oriented domain models that encapsulate business rules and behavior
- **Interfaces**: Contracts that define what an entity can do or a repository must provide

---

## Interfaces

### Eatable

**File**: `domain/Interfaces/Eatable.ts`

**Purpose**: Defines the contract for objects that can be consumed or eaten.

**Methods**:

- `eat(): void` - Executes the action of eating the object

**Implementation Notes**:

- This is a behavioral interface used to mark types that support consumption
- Used with objects like fruits (Apple, Banana)

**Usage Example**:

```typescript
const apple = new Apple(1, "Red Apple", "red", 150);
apple.eat(); // Output: Jabuka Red Apple je pojedena.
```

---

### Holdable

**File**: `domain/Interfaces/Holdable.ts`

**Purpose**: Defines the contract for objects that can be held or grasped.

**Methods**:

- `hold(): void` - Executes the action of holding the object

**Implementation Notes**:

- This is a behavioral interface used to mark types that can be physically held
- Can be combined with other interfaces (e.g., an object can be both Eatable and Holdable)

**Usage Example**:

```typescript
const banana = new Banana(1, "Yellow Banana", 20, 7);
banana.hold(); // Output: Banana Yellow Banana je zadržana.
```

---

## Entities

### User

**File**: `domain/Entites/User.ts`

**Purpose**: Represents a user in the system with identity and contact information.

**Properties**:

- `id: string` (readonly) - Unique identifier for the user
- `name: string` (private) - Full name of the user
- `email: string` (private) - Email address of the user

**Constructor Parameters**:

```typescript
constructor(id: string, _name: string, _email: string)
```

**Getters**:

- `name: string` - Returns the user's name
- `email: string` - Returns the user's email

**Methods**:

- `updateEmail(newEmail: string): void` - Updates the user's email after validation
- `validateEmail(email: string): boolean` (private) - Validates email format using regex

**Validation Rules**:

- Name must not be empty (throws: "Ime korisnika ne smije biti prazno.")
- Email must not be empty and must be valid (throws: "Neispravan email korisnika.")
- Email format validation uses regex: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`

**Usage Example**:

```typescript
const user = new User("usr-123", "John Doe", "john@example.com");
console.log(user.name); // John Doe
console.log(user.email); // john@example.com
user.updateEmail("newemail@example.com"); // Valid email
```

**Error Handling**:

```typescript
// These will throw errors:
new User("usr-1", "", "email@example.com"); // Empty name
new User("usr-2", "Jane", "invalid-email"); // Invalid email format
```

**Repository Interface**: `IUserRepository`

- `saveUser(user: User): Promise<void>` - Persists a user to storage
- `getUserById(id: string): Promise<User | null>` - Retrieves a user by ID

---

### Apple

**File**: `domain/Entites/Apple.ts`

**Purpose**: Represents an apple fruit entity with specific attributes and behaviors.

**Implements**:

- `Eatable` - Can be eaten
- `Holdable` - Can be held

**Properties**:

- `id: number` (readonly) - Unique identifier
- `name: string` (readonly) - Name/variety of the apple
- `color: string` (readonly) - Color of the apple
- `weight: number` (readonly) - Weight in grams

**Constructor Parameters**:

```typescript
constructor(id: number, name: string, color: string, weight: number)
```

**Validation Rules**:

- Name must not be empty (throws: "Ime jabuke ne smije biti prazno.")
- Color must not be empty (throws: "Boja jabuke ne smije biti prazna.")
- Weight must be greater than 0 (throws: "Težina jabuke mora biti veća od nule.")

**Methods**:

- `eat(): void` - Logs eating action in Croatian
- `hold(): void` - Logs holding action in Croatian

**Usage Example**:

```typescript
const apple = new Apple(1, "Granny Smith", "green", 180);
apple.eat(); // Output: Jabuka Granny Smith je pojedena.
apple.hold(); // Output: Jabuka Granny Smith je zadržana.
```

**Error Handling**:

```typescript
// These will throw errors:
new Apple(1, "", "red", 150); // Empty name
new Apple(2, "Red", "", 150); // Empty color
new Apple(3, "Apple", "red", -10); // Invalid weight
```

---

### Banana

**File**: `domain/Entites/Banana.ts`

**Purpose**: Represents a banana fruit entity with ripeness and length properties.

**Implements**:

- `Eatable` - Can be eaten
- `Holdable` - Can be held

**Properties**:

- `id: number` (readonly) - Unique identifier
- `name: string` (readonly) - Name/variety of the banana
- `length: number` (readonly) - Length in centimeters
- `ripeness: number` (readonly) - Ripeness level (0-10 scale)

**Constructor Parameters**:

```typescript
constructor(id: number, name: string, length: number, ripeness: number)
```

**Validation Rules**:

- Name must not be empty (throws: "Ime banane ne smije biti prazno.")
- Length must be greater than 0 (throws: "Dužina banane mora biti veća od nule.")
- Ripeness must be between 0 and 10 inclusive (throws: "Zrelost banane mora biti između 0 i 10.")

**Methods**:

- `eat(): void` - Logs eating action in Croatian
- `hold(): void` - Logs holding action in Croatian

**Usage Example**:

```typescript
const banana = new Banana(1, "Cavendish", 20, 7);
banana.eat(); // Output: Banana Cavendish je pojedena.
banana.hold(); // Output: Banana Cavendish je zadržana.

// Ripeness scale example:
// 0-2: Green (unripe)
// 3-5: Yellow-green (ripening)
// 6-8: Yellow (ripe)
// 9-10: Yellow with brown spots (very ripe)
```

**Error Handling**:

```typescript
// These will throw errors:
new Banana(1, "", 20, 5); // Empty name
new Banana(2, "Banana", -5, 5); // Invalid length
new Banana(3, "Banana", 20, 15); // Ripeness out of range
new Banana(4, "Banana", 20, -1); // Negative ripeness
```

---

### Subscription

**File**: `domain/Entites/Subscription.ts`

**Purpose**: Represents a user subscription with lifecycle information.

**Properties**:

- `id: number` - Unique subscription identifier
- `userId: number` - ID of the user who owns the subscription
- `startDate: Date` - When the subscription started
- `endDate: Date` - When the subscription ends
- `isActive: boolean` - Current active status of the subscription

**Constructor Parameters**:

```typescript
constructor(
  id: number,
  userId: number,
  startDate: Date,
  endDate: Date,
  isActive: boolean
)
```

**Usage Example**:

```typescript
const subscription = new Subscription(
  1,
  123,
  new Date("2024-01-01"),
  new Date("2025-01-01"),
  true,
);

console.log(subscription.userId); // 123
console.log(subscription.isActive); // true
```

**Repository Interface**: `SubscriptionRepository`

Provides data access operations for subscriptions:

- `getSubscriptionByUserId(userId: number): Promise<Subscription | null>`
  - Retrieves the active subscription for a specific user
  - Returns null if no subscription is found

- `createSubscription(subscription: Subscription): Promise<void>`
  - Persists a new subscription to storage

- `cancelSubscription(subscriptionId: number): Promise<void>`
  - Cancels/terminates an existing subscription

**Usage Example**:

```typescript
// Using the repository interface
class MySubscriptionService {
  constructor(private repo: SubscriptionRepository) {}

  async getUserSubscription(userId: number): Promise<Subscription | null> {
    return this.repo.getSubscriptionByUserId(userId);
  }
}
```

---

## Design Patterns Used

### Entity Pattern

- Entities encapsulate business logic and validation rules
- Immutable identifiers and readonly properties ensure consistency
- Constructor validation prevents invalid states

### Interface Segregation

- Small, focused interfaces (Eatable, Holdable) provide flexibility
- Entities can implement multiple interfaces for behavioral contracts

### Repository Pattern

- `IUserRepository` and `SubscriptionRepository` interfaces define data access contracts
- Allows for dependency injection and easier testing with mock implementations

---

## Language Notes

The error messages and console outputs are written in Croatian (Serbo-Croatian):

- "Ime" = Name
- "ne smije biti" = must not be
- "prazno/prazna" = empty
- "je pojedena" = has been eaten
- "je zadržana" = has been held/retained
- "Zrelost" = Ripeness
- "mora biti" = must be

---

## Best Practices for Usage

1. **Always use the constructor** - Never bypass validation by creating objects manually
2. **Leverage immutability** - Readonly properties prevent accidental mutations
3. **Use repository interfaces** - Depend on abstractions, not concrete implementations
4. **Compose interfaces** - Objects can implement multiple behavioral interfaces
5. **Handle validation errors** - Always catch constructor errors in production code
