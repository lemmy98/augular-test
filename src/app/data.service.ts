import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiHandlerService: ApiHandlerService) { }

  getEmployees() {
    return this.apiHandlerService.get('employees')
  }

  addEmployee(data: any) {
    return this.apiHandlerService.post('employees', data)
  }

  deleteEmployee(id: number) {
    return this.apiHandlerService.delete('employees' + "/"+ id);
  }
}
