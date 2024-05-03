import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { CaseDataResponse } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CaseService extends BaseService {

  constructor() {
    super()
  }

  getCaseList() {
    return this.httpMethods.get<CaseDataResponse>('assets/data.json')
  }
}
