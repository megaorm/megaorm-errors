# MegaORM Errors

This package provides custom error classes for handling transaction, connection, and queue management issues in MegaORM, providing a consistent way to report failures.

## Installation

To install this package, run the following command:

```bash
npm install @megaorm/errors
```

## Errors

This package defines the following error classes:

```typescript
new BeginTransactionError(message?: string)
```

> Represents an error that occurs when starting a database transaction.

```typescript
new CommitTransactionError(message?: string)
```

> Represents an error that occurs when committing a database transaction.

```typescript
new RollbackTransactionError(message?: string)
```

> Represents an error that occurs when rolling back a database transaction.

```typescript
new CloseConnectionError(message?: string)
```

> Represents an error that occurs when closing a database connection.

```typescript
new CreateConnectionError(message?: string)
```

> Represents an error that occurs when creating a database connection.

```typescript
new MaxConnectionError(message?: string)
```

> Represents an error when the maximum number of database connections is exceeded.

```typescript
new MaxQueueSizeError(message?: string)
```

> Represents an error when the maximum queue size is exceeded.

```typescript
new MaxQueueTimeError(message?: string)
```

> Represents an error when the maximum allowed queue time is exceeded.

```typescript
new QueryError(message?: string)
```

> Represents an error that occurs during query execution.

```typescript
new ShutdownError(message?: string)
```

> Represents an error that occurs during shutdown.

## Default Error Messages

Each error class has a default message that is used if no custom message is provided. Below are the default messages for each error:

- **`BeginTransactionError`**: `'Begin transaction failed'`
- **`CommitTransactionError`**: `'Commit transaction failed'`
- **`RollbackTransactionError`**: `'Rollback transaction failed'`
- **`CloseConnectionError`**: `'Close connection failed'`
- **`CreateConnectionError`**: `'Create connection failed'`
- **`MaxConnectionError`**: `'Max number of connections passed'`
- **`MaxQueueSizeError`**: `'Max queue size passed'`
- **`MaxQueueTimeError`**: `'Max queue time passed'`
- **`QueryError`**: `'Query execution failed'`
- **`ShutdownError`**: `'Shutdown failed'`
