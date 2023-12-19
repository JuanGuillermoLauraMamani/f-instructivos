import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructivo } from 'src/app/models/instructivos';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-instructivo',
  templateUrl: './instructivo.page.html',
  styleUrls: ['./instructivo.page.scss'],
})
export class InstructivoPage implements OnInit {
  instructivoSeleccionado: Instructivo = {} as Instructivo;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) //private location: Location
  {}

  ngOnInit() {
    this.getID();
  }

  getID(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.dataService
      .getInstructivo(id)
      .subscribe((instructivo: Instructivo) => {
        this.instructivoSeleccionado = instructivo;
      });
  }
}
