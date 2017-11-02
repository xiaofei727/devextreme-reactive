import React from 'react';
import {
  Grid,
  DragDropContext,
  TableView,
  TableHeaderRow,
  TableColumnReordering,
} from '@devexpress/dx-react-grid-bootstrap3';

import {
  generateRows,
} from '../../demo-data/generator';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex', width: 100 },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: generateRows({ length: 6 }),
      columnOrder: ['city', 'sex', 'car', 'name'],
    };

    this.changeColumnOrder = this.changeColumnOrder.bind(this);
  }
  changeColumnOrder(newOrder) {
    this.setState({ columnOrder: newOrder });
  }
  render() {
    const { rows, columns, columnOrder } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <DragDropContext />
        <TableView />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={this.changeColumnOrder}
        />
        <TableHeaderRow allowDragging />
      </Grid>
    );
  }
}