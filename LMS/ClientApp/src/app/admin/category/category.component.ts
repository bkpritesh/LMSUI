import { Component, OnInit } from '@angular/core';
declare var window: any;
import { Category } from '../../modal/category';
import { ServiceService } from '../Service/service.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {

  formModal: any;
  categories: Category[] | undefined;
  category = new Category();


  constructor(private apibased: ServiceService) { }

  openFormModal() {
    this.formModal.show();
  }

  closeFormModal() {
    this.formModal.hide();
  }

  ngOnInit(): void {

    this.load();

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('addcategory')
    );
  }

   load() {
    this.apibased.getData().subscribe(res => {
      this.categories = res;
      this.closeFormModal();
    });
  }

  addCategory() {
    this.apibased.addCategoryData(this.category).subscribe(data => {
      console.log(data)
      this.load();
    });
  }
}
