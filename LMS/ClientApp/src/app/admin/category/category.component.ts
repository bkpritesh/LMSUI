import { Component, OnInit } from '@angular/core';
declare var window: any;
import { Category } from '../../modal/category';
import { ServiceService } from '../Service/service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {

  AddformModal: any ;
  EditformModal: any;
  DeleteformModal: any;
  formModal: any;
  categories: Category[] | undefined;
  category = new Category();
  categoryId:string='';

  constructor(private apibased: ServiceService, private toastrService: ToastrService) { }

  openAddFormmodal() {
    this.AddformModal.show();
  }

  openDeleteFormModal(Cid: string) {
    this.categoryId = Cid;
    this.DeleteformModal.show();
  }

  openEditFormModal(Cid :string) {
    this.categoryId = Cid;
    this.EditformModal.show();
    this.getData();
    }
   

  closeFormModal() {
    this.AddformModal.hide();
    this.EditformModal.hide();
    this.DeleteformModal.hide();
  }

  //resetForm() {
  //  this.AddformModal.form=null;
  //}

  ngOnInit(): void {

    this.load();

    this.AddformModal = new window.bootstrap.Modal(
      document.getElementById('addcategory') 
    );

//    this.resetForm();

    this.EditformModal = new window.bootstrap.Modal(
      document.getElementById('editcategory')
    );

    this.DeleteformModal = new window.bootstrap.Modal(
      document.getElementById('deletecategory')
    );

  }

  load() {
     debugger
    this.apibased.getData().subscribe(res => {
      debugger
      this.categories = res;
      this.closeFormModal();
    });
   }  

  addCategory() {
    this.apibased.addCategoryData(this.category).subscribe(() => {   
      this.closeFormModal();
      this.load();
      this.toastrService.success('The Category is Added!');
    }, error => {
      this.toastrService.error('Try Again!');
    });
  }

  getData() {
    this.apibased.gotoCategoryData(this.categoryId).subscribe(data => {
      this.category = data;
      console.log(data);
    })
  }

  editCategory() {
    this.apibased.editCategory(this.category).subscribe(() => {
      this.closeFormModal();     
      this.toastrService.success('The Category is Updated!');
      this.load();
    }, error => {
      this.toastrService.error('Try Again!');
    });
  }

  deleteCategory() {
    this.apibased.deleteCategory(this.categoryId).subscribe(() => {
      this.closeFormModal();      
      this.toastrService.success('The Category is Delete!');
      this.load();
    }, error => {
      this.toastrService.error('Try Again!');
    });
    
  }
}
