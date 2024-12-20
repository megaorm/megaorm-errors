/**
 * Represents an error that occurs when starting a database transaction.
 * @extends Error
 */
export class BeginTransactionError extends Error {
  /**
   * Creates an instance of BeginTransactionError.
   * @param message - Optional custom error message. Defaults to 'Begin transaction failed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Begin transaction failed');
  }
}

/**
 * Represents an error that occurs when committing a database transaction.
 * @extends Error
 */
export class CommitTransactionError extends Error {
  /**
   * Creates an instance of CommitTransactionError.
   * @param message - Optional custom error message. Defaults to 'Commit transaction failed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Commit transaction failed');
  }
}

/**
 * Represents an error that occurs when rolling back a database transaction.
 * @extends Error
 */
export class RollbackTransactionError extends Error {
  /**
   * Creates an instance of RollbackTransactionError.
   * @param message - Optional custom error message. Defaults to 'Rollback transaction failed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Rollback transaction failed');
  }
}

/**
 * Represents an error that occurs when closing a database connection.
 * @extends Error
 */
export class CloseConnectionError extends Error {
  /**
   * Creates an instance of CloseConnectionError.
   * @param message - Optional custom error message. Defaults to 'Close connection failed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Close connection failed');
  }
}

/**
 * Represents an error that occurs when creating a database connection.
 * @extends Error
 */
export class CreateConnectionError extends Error {
  /**
   * Creates an instance of CreateConnectionError.
   * @param message - Optional custom error message. Defaults to 'Create connection failed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Create connection failed');
  }
}

/**
 * Represents an error when the maximum number of database connections is exceeded.
 * @extends Error
 */
export class MaxConnectionError extends Error {
  /**
   * Creates an instance of MaxConnectionError.
   * @param message - Optional custom error message. Defaults to 'Max number of connections passed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Max number of connections passed');
  }
}

/**
 * Represents an error when the maximum queue size for database connections is exceeded.
 * @extends Error
 */
export class MaxQueueSizeError extends Error {
  /**
   * Creates an instance of MaxQueueSizeError.
   * @param message - Optional custom error message. Defaults to 'Max queue size passed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Max queue size passed');
  }
}

/**
 * Represents an error when the maximum allowed queue time is exceeded.
 * @extends Error
 */
export class MaxQueueTimeError extends Error {
  /**
   * Creates an instance of MaxQueueTimeError.
   * @param message - Optional custom error message. Defaults to 'Max queue time passed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Max queue time passed');
  }
}

/**
 * Represents an error that occurs during query execution.
 * @extends Error
 */
export class QueryError extends Error {
  /**
   * Creates an instance of QueryError.
   * @param message - Optional custom error message. Defaults to 'Query execution failed'.
   */
  constructor(message?: string) {
    super(message ? message : 'Query execution failed');
  }
}

/**
 * Represents an error that occurs during shutdown.
 * @extends Error
 */
export class ShutdownError extends Error {
  /**
   * Creates an instance of ShutdownError.
   * @param message - Optional custom error message. Defaults to 'Shutdown failed'.
   */
  constructor(message?: string) {
    super(message ? message : 'shutdown failed');
  }
}
