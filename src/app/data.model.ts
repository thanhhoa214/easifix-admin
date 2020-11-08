export interface User {
  id: string;
  phone: string;
  name: string;
  avatar: string;
  address: string;
  province?: string;
  distance: number;
  time: number;
  rating?: number;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  thumbnail: string;
  services?: Service[];
  userId?: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  categoryId?: string;
}

export interface Order {
  id: string;
  name: string;
  services: string[];
  total: number;
}

export const enum LSItemName {
  SERVICES = 'db-services',
  CATEGORIES = 'db-categories',
  USERS = 'db-users',
  ORDERS = 'db-orders,',
  SEARCH_HISTORY = 'db-search-history',
  BRANDS = 'db-brands',
}
export interface IdName {
  id: string;
  name: string;
}
