import {
  BeginTransactionError,
  CloseConnectionError,
  CommitTransactionError,
  CreateConnectionError,
  MaxConnectionError,
  MaxQueueSizeError,
  MaxQueueTimeError,
  QueryError,
  RollbackTransactionError,
  ShutdownError,
} from '../src/index';

describe('QueryError', () => {
  test('should create an error with the default message', () => {
    const error = new QueryError();
    expect(error.message).toBe('Query execution failed');
    expect(error).toBeInstanceOf(QueryError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new QueryError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(QueryError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('MaxQueueSizeError', () => {
  test('should create an error with the default message', () => {
    const error = new MaxQueueSizeError();
    expect(error.message).toBe('Max queue size passed');
    expect(error).toBeInstanceOf(MaxQueueSizeError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new MaxQueueSizeError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(MaxQueueSizeError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('MaxQueueTimeError', () => {
  test('should create an error with the default message', () => {
    const error = new MaxQueueTimeError();
    expect(error.message).toBe('Max queue time passed');
    expect(error).toBeInstanceOf(MaxQueueTimeError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new MaxQueueTimeError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(MaxQueueTimeError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('RollbackTransactionError', () => {
  test('should create an error with the default message', () => {
    const error = new RollbackTransactionError();
    expect(error.message).toBe('Rollback transaction failed');
    expect(error).toBeInstanceOf(RollbackTransactionError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new RollbackTransactionError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(RollbackTransactionError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('CreateConnectionError', () => {
  test('should create an error with the default message', () => {
    const error = new CreateConnectionError();
    expect(error.message).toBe('Create connection failed');
    expect(error).toBeInstanceOf(CreateConnectionError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new CreateConnectionError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(CreateConnectionError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('BeginTransactionError', () => {
  test('should create an error with the default message', () => {
    const error = new BeginTransactionError();
    expect(error.message).toBe('Begin transaction failed');
    expect(error).toBeInstanceOf(BeginTransactionError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new BeginTransactionError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(BeginTransactionError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('CloseConnectionError', () => {
  test('should create an error with the default message', () => {
    const error = new CloseConnectionError();
    expect(error.message).toBe('Close connection failed');
    expect(error).toBeInstanceOf(CloseConnectionError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom close connection error';
    const error = new CloseConnectionError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(CloseConnectionError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('ShutdownError', () => {
  test('should create an error with the default message', () => {
    const error = new ShutdownError();
    expect(error.message).toBe('shutdown failed');
    expect(error).toBeInstanceOf(ShutdownError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new ShutdownError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(ShutdownError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('CommitTransactionError', () => {
  test('should create an error with the default message', () => {
    const error = new CommitTransactionError();
    expect(error.message).toBe('Commit transaction failed');
    expect(error).toBeInstanceOf(CommitTransactionError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new CommitTransactionError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(CommitTransactionError);
    expect(error).toBeInstanceOf(Error);
  });
});

describe('MaxConnectionError', () => {
  test('should create an error with the default message', () => {
    const error = new MaxConnectionError();
    expect(error.message).toBe('Max number of connections passed');
    expect(error).toBeInstanceOf(MaxConnectionError);
    expect(error).toBeInstanceOf(Error);
  });

  test('should create an error with a custom message', () => {
    const customMessage = 'Custom error message';
    const error = new MaxConnectionError(customMessage);
    expect(error.message).toBe(customMessage);
    expect(error).toBeInstanceOf(MaxConnectionError);
    expect(error).toBeInstanceOf(Error);
  });
});
