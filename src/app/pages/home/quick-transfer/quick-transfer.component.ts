import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { NoQuickTransferComponent } from "../../empty-state/no-quick-transfer/no-quick-transfer.component";

@Component({
    selector: 'app-quick-transfer',
    standalone: true,
    templateUrl: './quick-transfer.component.html',
    styleUrl: './quick-transfer.component.css',
    imports: [MatTabsModule, CommonModule, NoQuickTransferComponent]
})
export class QuickTransferComponent {

  isQuickTransferEmpty : boolean = true;

  bankPayees =[
    { id: 1, payee: 'Zaid Gul', img: 'assets/img/user/Avatar.png' },
    { id: 2, payee: 'Abdullah', img: 'assets/img/user/Avatar-1.png'},
    { id: 3, payee: 'Munif', img: 'assets/img/user/Avatar-2.png'},
    { id: 4, payee: 'Zahid', img: 'assets/img/user/Avatar.png'},
    { id: 5, payee: 'Mahek', img: 'assets/img/user/Avatar-1.png'},
    { id: 6, payee: 'Iqra', img: 'assets/img/user/Avatar-2.png'},
  ];

  raastPayees =[
    { id: 1, payee: 'Zaid Gul', img: 'assets/img/user/Avatar.png' },
    { id: 2, payee: 'Abdullah', img: 'assets/img/user/Avatar-1.png'},
    { id: 3, payee: 'Munif', img: 'assets/img/user/Avatar-2.png'},
    { id: 4, payee: 'Zahid', img: 'assets/img/user/Avatar.png'},
    { id: 5, payee: 'Mahek', img: 'assets/img/user/Avatar-1.png'},
    { id: 6, payee: 'Iqra', img: 'assets/img/user/Avatar-2.png'},
  ];

  cnicPayees =[
    { id: 1, payee: 'Zaid Gul', img: 'assets/img/user/Avatar.png' },
    { id: 2, payee: 'Abdullah', img: 'assets/img/user/Avatar-1.png'},
    { id: 3, payee: 'Munif', img: 'assets/img/user/Avatar-2.png'},
    { id: 4, payee: 'Zahid', img: 'assets/img/user/Avatar.png'},
    { id: 5, payee: 'Mahek', img: 'assets/img/user/Avatar-1.png'},
    { id: 6, payee: 'Iqra', img: 'assets/img/user/Avatar-2.png'},
  ];

}
