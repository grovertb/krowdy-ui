---
title: Table React component
components: Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel
---

# Table

<p class="description">Tables display sets of data. They can be fully customized.</p>

[Tables](https://material.io/design/components/data-tables.html) display information in a way that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.

Tables can include:

- A corresponding visualization
- Navigation
- Tools to query and manipulate data

When including tools, they should be placed directly above or below the table.

## Structure

A data table contains a header row at the top that lists column names, followed by rows for data.

Checkboxes should accompany each row if the user needs to select or manipulate data.

For accessibility, the first column is set to be a `<th>` element, with a `scope` of `"row"`. This enables screen readers to identify a cell's value by it's row and column name.

## Simple Table

A simple example with no frills.

{{"demo": "containers/components/tables/SimpleTable.js", "bg": true}}

## Dense Table

A simple example of a dense table with no frills.

{{"demo": "containers/components/tables/DenseTable.js", "bg": true}}

## With Toolbar Table

{{"demo": "containers/components/tables/ToolbarTable.js", "bg": true}}

## Sorting & Selecting

This example demonstrates the use of `Checkbox` and clickable rows for selection, with a custom `Toolbar`. It uses the `TableSortLabel` component to help style column headings.

The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table. (The ['Custom Table Pagination Action' example](#custom-table-pagination-action) below shows the pagination within the TableFooter.)

{{"demo": "containers/components/tables/EnhancedTable.js", "bg": true}}

## Customized tables

Here is an example of customizing the component. You can learn more about this in the
[overrides documentation page](/customization/components/).

{{"demo": "containers/components/tables/CustomizedTables.js", "bg": true}}

### Custom pagination options

It's possible to customise the options shown in the "Rows per page" select using the `rowsPerPageOptions` prop.
You should either provide an array of:

- **numbers**, each number will be used for the option's label and value.

  ```jsx
  <TablePagination rowsPerPageOptions={[10, 50]} />
  ```
- **objects**, the `value` and `label` keys will be used respectively for the value and label of the option (useful for language strings such as 'All').

  ```jsx
  <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
  ```

### Custom pagination actions

The `Action` property of the `TablePagination` component allows the implementation of
custom actions.

{{"demo": "containers/components/tables/CustomPaginationActionsTable.js", "bg": true}}

## Fixed header

An example of a table with scrollable rows and fixed column headers.
It leverages the `stickyHeader` prop (⚠️ no IE 11 support).

{{"demo": "containers/components/tables/StickyHeadTable.js", "bg": true}}

## Spanning Table

A simple example with spanning rows & columns.

{{"demo": "containers/components/tables/SpanningTable.js", "bg": true}}
