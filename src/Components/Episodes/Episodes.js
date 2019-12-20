import React from "react";
import episodes from "../../data/en_US";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const products = episodes.episodeList;

const options = {
  // pageStartIndex: 0,
  sizePerPage: 5,
  hideSizePerPage: true,
  hidePageListOnlyOnePage: true
};

const columns = [
  {
    dataField: 'season',
    text: 'Season',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Episode Name',
    sort: true,
    filter: textFilter()
  },
  {
    dataField: 'rating',
    text: 'Rating',
    sort: true
  }];

export default function Episodes({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <h1 className="gallery-title">{title}</h1>
      <div className="section-content" id={id}>
        <BootstrapTable striped hover condensed
          id="bar"
          keyField='id'
          data={products}
          columns={columns}
          filter={filterFactory()}
          pagination={paginationFactory(options)} />
      </div>
    </div>
  );
}
