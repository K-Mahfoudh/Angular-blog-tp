import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {

 @Input() post : any;
 onLoveIt(){
 	this.post.loveIts++;
 }
 onDontLoveIt(){
 	this.post.loveIts--;
 }

}
