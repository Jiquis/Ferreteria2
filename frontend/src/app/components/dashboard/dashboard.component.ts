import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterModule, 
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  listProduct: Product[] = []

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
      this.getProducts();
  }
  getProducts() {
    this._productService.getProducts().subscribe(data =>{
      this.listProduct = data;
    }) 
  }
}
