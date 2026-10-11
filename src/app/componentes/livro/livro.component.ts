import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }

  livro = {
    titulo: 'As ondas',
    autoria: 'Virgia Woolf',
    favorito: false,
    imagem: 'https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX331_BO1,204,203,200_.jpg'
  };

}
