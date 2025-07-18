const validateBug = require('../utils/validateBug');

describe('validateBug', () => {
  it('should return error if title is missing', () => {
    expect(validateBug({ description: 'desc' })).toBe('Title is required and must be at least 3 characters.');
  });
  it('should return error if description is missing', () => {
    expect(validateBug({ title: 'Bug' })).toBe('Description is required and must be at least 5 characters.');
  });
  it('should return error if title is too short', () => {
    expect(validateBug({ title: 'Bu', description: 'descdesc' })).toBe('Title is required and must be at least 3 characters.');
  });
  it('should return error if description is too short', () => {
    expect(validateBug({ title: 'Bug', description: 'desc' })).toBe('Description is required and must be at least 5 characters.');
  });
  it('should return null for valid input', () => {
    expect(validateBug({ title: 'Bug', description: 'A valid description' })).toBeNull();
  });
});
