// Define the type of the stored item
interface StoredItem<T> {
  value: T;
  expiry: number;
}

// Function to save an item with expiration in local storage
const saveItemWithExpiry = <T>(key: string, value: T, ttl: number): void => {
  const now = new Date();
  const item: StoredItem<T> = {
    value,
    expiry: now.getTime() + ttl, // ttl is time to live in milliseconds
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// Function to get an item from local storage and check for expiration
const getItemWithExpiry = <T>(key: string): T | null => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }

  try {
    const item: StoredItem<T> = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (err) {
    console.error('Failed to parse localStorage item:', err);
    return null;
  }
};

// Exported functions to save authToken and userId with a default expiry (e.g., 1 hour)
export const saveAuthTokenLocal = (
  token: string,
  ttl: number = 3600000
): void => {
  if (token) {
    saveItemWithExpiry('authToken', token, ttl);
  } else {
    console.warn(
      'Attempted to save an undefined or null token in local storage'
    );
  }
};

export const saveUserIdLocal = (
  userId: string,
  ttl: number = 3600000
): void => {
  if (userId) {
    saveItemWithExpiry('userId', userId, ttl);
  } else {
    console.warn(
      'Attempted to save an undefined or null userId in local storage'
    );
  }
};

export const getAuthTokenLocal = (): string | null =>
  getItemWithExpiry<string>('authToken');
export const getUserIdLocal = (): string | null =>
  getItemWithExpiry<string>('userId');
