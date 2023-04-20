import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get loading() {
    return this.loader.asObservable();
  }

  show() {
    this.loader.next(true);
  }

  hide() {
    this.loader.next(false);
  }
}
