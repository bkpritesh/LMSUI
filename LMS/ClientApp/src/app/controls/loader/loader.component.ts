import { Component, Injectable, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

@Injectable({
  providedIn: 'root'
  })

export class LoaderComponent{
   
  constructor(private loaderService: LoaderService) { }
  loading$ = this.loaderService.loading;

}

