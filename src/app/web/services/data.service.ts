import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available throughout the application
})
export class DataService {
  private booleanSubject = new BehaviorSubject<boolean>(false); // Initialize with false
  public currentBoolean = this.booleanSubject.asObservable(); // Observable to listen to the boolean value

  constructor() { }
  // Method to change the boolean value
  public changeBoolean(value: boolean) {
    this.booleanSubject.next(value); // Emit the new value
  }
}
