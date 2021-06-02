import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsPage } from './starwars-character';
@Component({
  selector: 'nx-poc-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.scss'],
})
export class SuperheroComponent implements OnInit {
  accessToken = '10225012078866662';
  currentUrl = `https://swapi.dev/api/people/?page=1`;
  page$: Observable<StarWarsPage>;
  constructor(private http: HttpClient) {
    this.page$ = this.http.get<StarWarsPage>(this.currentUrl);
    // .subscribe((starWarsPage: StarWarsPage) =>
    //   console.log(
    //     '🚀 ~ file: superhero.component.ts ~ line 14 ~ SuperheroComponent ~ constructor ~ res',
    //     starWarsPage
    //   )
    // );
  }

  ngOnInit(): void {}
}
