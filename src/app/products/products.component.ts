import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  posts:any;

  constructor(private service:PostService){
    console.log("I AM CONS.....");
  }

  ngOnInit() {
    console.log('I am NGININT.............')
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    });


    }

}
