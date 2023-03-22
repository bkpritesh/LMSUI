import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styles: [
   // '.date{ background: #32A8E4; border: 1px solid #32A8E4; box-shadow: 0 4px 12px rgba(0, 0, 0, .3); top: 35px; left: 0; font - weight: 700 }'
   
  ]
})
export class AdmissionComponent implements OnInit {

  dropdownData: any[] = [];
  settings: IDropdownSettings = {};
  form!: FormGroup;
  selectedItems: any[] = [];
  cities: any[] = [];
  states: any[] = [];
  date = new Date();

  public countryData: { [key: string]: Object }[] = [
    { CountryName: 'Australia', CountryId: '2' },
    { CountryName: 'United States', CountryId: '1' }
  ];

  public stateData: { [key: string]: Object }[] = [
    { StateName: 'New York', CountryId: '1', SateId: '101' },
    { StateName: 'Virginia ', CountryId: '1', SateId: '102' },
    { StateName: 'Tasmania ', CountryId: '2', SateId: '105' }
  ];

  public cityData: { [key: string]: Object }[] = [
    { CityName: 'Albany', SateId: '101', CityId: 201 },
    { CityName: 'Beacon ', SateId: '101', CityId: 202 },
    { CityName: 'Emporia', SateId: '102', CityId: 206 },
    { CityName: 'Hampton ', SateId: '102', CityId: 205 },
    { CityName: 'Hobart', SateId: '105', CityId: 213 },
    { CityName: 'Launceston ', SateId: '105', CityId: 214 }
  ];

  options: DatepickerOptions = {
    minYear: getYear(new Date()) - 30, // minimum available and selectable year
    maxYear: getYear(new Date()) + 30, // maximum available and selectable year
    placeholder: '', // placeholder in case date model is null | undefined, example: 'Please pick a date'
    format: 'LLLL do yyyy', // date format to display in input
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEE',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: locale, // date-fns locale
    position: 'bottom',
    inputClass: 'form-control ', // custom input CSS class to be applied
    calendarClass: 'datepicker-default form-label', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
  };

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

    //onselect(SateId){
    //  this.cities = this.cityData.filter((item) => item.StateId == StateId);
    //}

    //this.countryData = this.onSelect(this.countryData.CountryId);

    this.dropdownData = [
      { ID: 1, Value: 'marketing' },
      { ID: 2, Value: 'creativity' },
      { ID: 3, Value: 'pool player' },
      { ID: 4, Value: 'Data4' },
      { ID: 5, Value: 'other' }
    ];
    this.settings = {
      idField: 'ID',
      textField: 'Value',
      allowSearchFilter:true,
    };

    this.form = this.fb.group({
      myItems: [this.selectedItems]
    });
  }
}
