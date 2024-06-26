import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();
  
  customPaginatorIntl.itemsPerPageLabel = 'Rows per page';
  customPaginatorIntl.previousPageLabel = 'prev';
  customPaginatorIntl.nextPageLabel = 'next';

  return customPaginatorIntl;
}