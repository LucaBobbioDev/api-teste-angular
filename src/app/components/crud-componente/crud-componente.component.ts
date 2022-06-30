import { Component, OnInit } from '@angular/core';
import Images from 'src/app/interface/Images';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-crud-componente',
  templateUrl: './crud-componente.component.html',
  styleUrls: ['./crud-componente.component.css']
})
export class CrudComponenteComponent implements OnInit {
  images: Images[] = [];
  
  constructor(private crudService: ServicesService) { 
    this.getter();
  }

  ngOnInit(): void {
  }

  getter(){
    this.crudService.getPhotos().subscribe((images) => (this.images = images) );
  }
  
}
