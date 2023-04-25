import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../app/admin/Service/service.service';
import { Profile } from '../modal/Profile';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  accountDeatil: any;
  accountId: string = '';
  AccountTypeDetail = new Profile();

  constructor(private apiservice: ServiceService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {

    const account = localStorage.getItem('account');

    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
      this.accountId = this.accountDeatil.accountId;
    }

    this.apiservice.AccountDetailByID(this.accountId).subscribe((res: any) => {
      debugger
      this.AccountTypeDetail = res;
      console.log(this.AccountTypeDetail.profileImg);
    });


  }

  //handleFileInput(files: FileList) {
  //  const file = files.item(0);
  //  const reader = new FileReader();
  //  reader.readAsDataURL(File);
  //  reader.onload = () => {
  //    this.previewImage = reader.result as string;
  //  };
  //}



  //previewImage(imageUrl: string): void {
  //  const imgPreview = document.getElementById('uploadfile-1-preview') as HTMLImageElement;
  //  imgPreview.src = imageUrl;
  //}

  UpdateProfile() {
    debugger
    this.apiservice.UpdateAccount(this.AccountTypeDetail).subscribe(() => {
      debugger
      this.toastrService.success('Your Profile is Updated!');
      return this.route.navigateByUrl('/dashboard');
    }, error => {
      this.toastrService.error('Please Try Again!');
    });
  }
}
