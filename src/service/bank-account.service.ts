import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  banks: Array<object> = [
    {bankName: 'Mandiri', accountName: 'Mandiri ESC', accountNo: '9087754098', currency: 'IDR', lastBalance: 596000},
    {bankName: 'CIMB', accountName: 'CIMB Niaga Kudo', accountNo: '7760098245', currency: 'IDR', lastBalance: 8776000},
    {bankName: 'CITIC', accountName: 'Bank of China', accountNo: '100000900356134', currency: 'CNY', lastBalance: 0}
  ];

  constructor() {}

  get() {
    return of(this.banks);
  }
}
