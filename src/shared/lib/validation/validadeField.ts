export function validateField(field: string, value: string): string {
  switch (field) {
    case 'name':
      return /^[A-Za-z\s]+$/.test(value)
        ? ''
        : 'Name must contain only letters and spaces.';
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ''
        : "Please enter a valid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
    case 'about':
      return value.trim().length >= 10
        ? ''
        : 'About must be at least 10 characters long.';
    case 'link':
      if (!value.trim()) return '';
      if (!/^https?:\/\//.test(value.trim())) {
        return 'URL must start with http:// or https://';
      }
      try {
        new URL(value.trim());
        return '';
      } catch {
        return 'Invalid video link. Please enter a valid URL.';
      }
    case 'discord':
      return /^(?=.{2,32}$)[a-zA-Z0-9._]+$/.test(value)
        ? ''
        : 'Discord username must be 2-32 characters long and can only contain letters, numbers, dots, and underscores.';
    default:
      return '';
  }
}
