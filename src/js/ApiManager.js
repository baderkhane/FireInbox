/**
 * Abstract class which have abstract methods, wich will be ovverdied by
 * sub classes
 */
export class ApiManager {
  constructor() {
    if (new.target === Abstract) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}
