import { compose } from "redux";

export const filtersGetter = state => state.filters;

const filters = [0, 1, 2, 3];

export const ticketsGetter = state => {
  return {
    tickets: compose(
      withFilters(filters),
      withSort
    )(state.tickets.tickets)
  };
};

const withSort = arr => arr.sort((a, b) => (a.stops > b.stops) ? 1 : ((b.stops > a.stops) ? -1 : 0));
const withFilters = filters => arr => arr.filter(item => filters.includes(item.stops));
