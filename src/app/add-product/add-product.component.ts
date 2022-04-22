import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductCreateDTO} from 'src/dto/productCreateDTO';
import {Category} from 'src/model/category';
import {ProductService} from 'src/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    thumbnail: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    stock: new FormControl()
  });

  categories: Category[] = [
    {id: '0', name: 'Phone case'},
    {id: '1', name: 'Tempered glass'},
    {id: '2', name: 'Headphone'},
    {id: '3', name: 'Phone charger'}
  ];


  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  onCreateProduct(): void {
    if (!this.addProductForm.valid) {
      alert('Invalid form');
      return;
    }

    const productCreateDTO: ProductCreateDTO = {
      name: this.addProductForm.get('name')?.value,
      description: this.addProductForm.get('description')?.value,
      thumbnail: this.addProductForm.get('thumbnail')?.value,
      category: this.addProductForm.get('category')?.value,
      price: this.addProductForm.get('price')?.value,
      stock: this.addProductForm.get('stock')?.value
    };
    this.productService.create(productCreateDTO).subscribe(response => {
      alert('Object created in backend' + response.toString());
      this.router.navigate(['/product']);
    });
  }
}
