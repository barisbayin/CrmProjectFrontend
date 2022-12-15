import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personnel } from 'src/app/models/personnel';
import { PersonnelService } from 'src/app/services/personnel.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent {

  personnelAddForm: FormGroup;
  personnelList: Personnel[] = [];
  query: string;
  filterText:string;
  focus: boolean;
  sortOrder: string;
  sortBy = 'asc';

  public personnelFields = [
    { name: "name", label: "İsim", type: "text" },
    { name: "lastName", label: "Soyisim", type: "text" },
    { name: "birthDate", label: "Doğum Tarihi", type: "date" },
    { name: "identityNumber", label: "Kimlik Numarası", type: "text" },
    { name: "phoneNumber", label: "Telefon Numarası", type: "text" },
    { name: "email", label: "E-posta", type: "email" },
    { name: "departmentName", label: "Departman", type: "select" },
    { name: "fullAddress", label: "Tam Adres", type: "text" },
    { name: "addressLine", label: "Adres Satırı", type: "text" },
    { name: "countryName", label: "Ülke", type: "select" },
    { name: "cityName", label: "İl", type: "select" },
    { name: "countyName", label: "İlçe", type: "select" },
    { name: "neighbourhoodName", label: "Mahalle", type: "select" },
    { name: "zipCode", label: "Posta Kodu", type: "text" },
    { name: "genderInformation", label: "Cinsiyet", type: "select" }

  ]

  constructor(private fb: FormBuilder, private personnelService: PersonnelService) { }


  ngOnInit() {

    this.getPagebleProductList();

    this.personnelAddForm = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      birthDate: ["", Validators.required],
      identityNumber: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      email: ["", Validators.required],
      fullAddress: ["", Validators.required],
      addressLine: ["", Validators.required],
      countryName: ["", Validators.required],
      cityName: ["", Validators.required],
      countyName: ["", Validators.required],
      neighbourhoodName: ["", Validators.required],
      zipCode: ["", Validators.required],
      genderInformation: ["", Validators.required],
      department: ["", Validators.required]
    });
  }


  getPagebleProductList() {
    console.log('Metod çalıştı...')
    this.personnelService.getPageblePersonnelList().subscribe(response => {
      this.personnelList = response.items;


      console.log(response.items)
      console.log('Metod bitti...')
    })

  }

  downloadImage() {
    const imageUrl = 'http://localhost:4200/assets/img/personnel-photos/default_photo.jpg';

    // İndirme işlemini başlatın
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'your-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadExcel() {
    // Veri kaynağınızı XLSX formatına dönüştürün
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.personnelList);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    // İndirme için bir dosya oluşturun
    const data = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    FileSaver.saveAs(data, 'veriler.xlsx');
  }
  uploadImage(): void {
    // Burada yükleme işlemlerini gerçekleştirin
    // Örneğin:
    console.log('Resim yükleniyor...');
  }

  savePersonnel(): void {

    console.log('Personel kaydediliyor...');
  }

  deletePersonnel(): void {

    console.log('Personel siliniyor...');
  }

  addPersonnel(): void {
    console.log('Personeli ekleniyor...');

  }

  sort(sortBy: string) {
    // Eğer aynı sütun üzerinde tıklanıldıysa sıralama yönünü değiştirin
    if (sortBy === this.sortBy) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Eğer farklı bir sütun üzerinde tıklanıldıysa sıralama yönünü "asc" olarak ayarlayın
      this.sortBy = sortBy;
      this.sortOrder = 'asc';
    }
  }


}
