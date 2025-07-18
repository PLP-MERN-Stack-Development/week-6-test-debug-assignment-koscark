// Simple validation helper for bug creation
module.exports = function validateBug({ title, description }) {
  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    return 'Title is required and must be at least 3 characters.';
  }
  if (!description || typeof description !== 'string' || description.trim().length < 5) {
    return 'Description is required and must be at least 5 characters.';
  }
  return null;
}
