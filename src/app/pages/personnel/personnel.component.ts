import { Component } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent {

  indir() {
    // Burada indirme işlemlerini gerçekleştirin
    // Örneğin:
    console.log('Resim indiriliyor...');
  }
  
  yukle() {
    // Burada yükleme işlemlerini gerçekleştirin
    // Örneğin:
    console.log('Resim yükleniyor...');
  }

  
}
