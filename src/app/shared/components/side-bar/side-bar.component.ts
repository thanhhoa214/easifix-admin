import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarSuccessComponent } from '../snack-bar-success/snack-bar-success.component';
interface TreeNode {
  name: string;
  icon: string;
  children?: TreeNode[];
  route?: string;
}

const TREE_DATA: TreeNode[] = [
  // {
  //   name: 'Products',
  //   route: '/product',
  //   icon: 'storefront',
  //   children: [
  //     { name: 'Bets', route: '/product/bet', icon: 'gavel' },
  //     { name: 'Buys', route: '/product/buy', icon: 'shopping_basket' },
  //   ],
  // },
  {
    name: 'Khách hàng',
    route: '/users',
    icon: 'account_circle',
  },
  {
    name: 'Kỹ thuật viên',
    route: '/fixers',
    icon: 'build_circle',
  },
  {
    name: 'Lịch sử',
    route: '/transactions',
    icon: 'swap_horizontal_circle',
  },
];
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  treeData = TREE_DATA;
  selectedNode: TreeNode = TREE_DATA[0];
  constructor(private _router: Router, private _snackBar: MatSnackBar) {}

  setSelectedNode(node: TreeNode): void {
    this.selectedNode = node;
  }

  hasSelectedChild(node: TreeNode): boolean {
    return node.children?.some((c) => c.route === this.selectedNode.route);
  }
  logout() {
    this._snackBar.openFromComponent(SnackBarSuccessComponent, {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: 'mat-snack-bar-success',
      data: { title: 'Success !', message: 'Logout successfully' },
    });
    this._router.navigateByUrl('/auth');
  }
}
