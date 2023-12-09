import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Noticia {
  title: { rendered: string };
  excerpt: { rendered: string };
  jetpack_featured_media_url: string;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  noticias: Noticia[] = [];

  constructor(private http: HttpClient) {
    this.getNoticias();
  }

  getNoticias() {
    const apiUrl = 'https://remolacha.net/wp-json/wp/v2/posts?search=digeset';

    this.http.get<Noticia[]>(apiUrl).subscribe((data) => {
      this.noticias = data;
    });
  }

}
