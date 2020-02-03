import { Component, OnInit } from '@angular/core';
import { BankAccountService } from 'src/service/bank-account.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit {

  banks: Array<object>;

  constructor(private bankAccountService: BankAccountService) { }

  ngOnInit() {
    this.bankAccountService.get()
    .subscribe(res => {
      this.banks = res;
    });
  }

}
