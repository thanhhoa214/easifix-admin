import { Injectable } from '@angular/core';
import { Service, User, Category, LSItemName, IdName } from './data.model';
import { DATABASE } from './data';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {
    this._setEncode(LSItemName.SERVICES, DATABASE.services);
    this._setEncode(LSItemName.CATEGORIES, DATABASE.categories);
    this._setEncode(LSItemName.USERS, DATABASE.users);
    this._setEncode(LSItemName.SEARCH_HISTORY, DATABASE.searchHistory);
  }

  getUsers(): User[] {
    return DATABASE.users;
  }

  getServices(): Service[] {
    return DATABASE.services;
  }

  getCategories(): Category[] {
    return DATABASE.categories;
  }
  getPredictions(): string[] {
    return DATABASE.brands.map((brands) => brands.name);
  }
  getRequests(): string[] {
    return DATABASE.requests.map((request) => request.name);
  }

  getSearchHistory() {
    return this._getEncode(LSItemName.SEARCH_HISTORY);
  }
  getService(userId: string, categoryId: string, serviceId: string): Service {
    return DATABASE.users
      .find((user) => user.id === userId)
      .categories.find((category) => category.id === categoryId)
      .services.find((service) => service.id === serviceId);
  }
  getCategory(userId: string, categoryId: string): Category {
    return DATABASE.users
      .find((user) => user.id === userId)
      .categories.find((category) => category.id === categoryId);
  }
  getUser(userId: string): User {
    return DATABASE.users.find((user) => user.id === userId);
  }

  writeSearchHistory(keyword: string): void {
    const searchItems = this._getEncode(LSItemName.SEARCH_HISTORY) ?? [];
    searchItems.push(keyword);
    this._setEncode(LSItemName.SEARCH_HISTORY, searchItems);
  }

  removeSearchHistory(keyword: string): void {
    let searchItems = this._getEncode(LSItemName.SEARCH_HISTORY) ?? [];
    searchItems = searchItems.filter((item) => item !== keyword);
    this._setEncode(LSItemName.SEARCH_HISTORY, searchItems);
  }

  writeBrand(name: string) {
    localStorage.setItem(LSItemName.BRANDS, name ?? '');
  }
  getBrand(): string {
    return localStorage.getItem(LSItemName.BRANDS) ?? '';
  }
  getCategoryByRequestName(requestName: string): Category {
    const requestId = DATABASE.requests.find(
      (r) => r.name?.toLowerCase() == requestName?.toLowerCase()
    )?.id;
    const firstDeviceRequest = DATABASE.devicesRequests.find(
      (devicesRequest) => devicesRequest.requestID == requestId
    );
    return DATABASE.categories.find(
      (c) => c.id == firstDeviceRequest?.deviceID
    );
  }
  searchCategory(q: string) {
    if (!q) return undefined;
    return (
      DATABASE.categories.find(
        (c) => c.name.toLowerCase() === q.toLowerCase()
      ) || this.getCategoryByRequestName(q)
    );
  }
  getCategoryByName(name: string): Category {
    return DATABASE.categories.find(
      (category) => category.name.toLowerCase() === name?.toLowerCase()
    );
  }

  private _getEncode(localStorageItemName: LSItemName) {
    const raw = localStorage.getItem(localStorageItemName);
    return raw ? JSON.parse(raw) : undefined;
  }
  private _setEncode(localStorageItemName: LSItemName, value: any) {
    localStorage.setItem(
      localStorageItemName,
      value ? JSON.stringify(value) : undefined
    );
  }
  // getOrders(): Order[] {}
}
