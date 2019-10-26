import { Component } from '@angular/core';
class Post{
  	title : string;
  	content : string;
  	loveIts : number;
  	created_at : Date;

  	constructor(title: string, content: string, loveIts: number){
  		this.title = title;
  		this.content = content;
  		this.loveIts = loveIts;
  		this.created_at = new Date();
  	}
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Blog';
  postList: Post[] = [
  	new Post("premier post","Le premier contenu de post est le suivant: contenu 1",0),
  	new Post("deuxieme post","Le deuxieme contenu de post est le suivant: contenu 2",0),
  	new Post("Troisième post","Le troisième contenu de post est le suivant: contenu 3",0)
  ]
}
