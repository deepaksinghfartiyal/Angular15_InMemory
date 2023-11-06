import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  private sharedata:any
  constructor() { 
    alert('hjg');
  }

  SetData(data:any)
  {
     this.sharedata=data;
  }

  getData()
  {
    var data=this.sharedata;
    return data;
  }

}
