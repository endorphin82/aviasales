import { compose } from "redux";
import { createSelector } from "reselect";

export const filtersGetter = state => state.filters;
export const ticketsGetter = state => state.tickets.tickets;

export const ticketsGetterWithSortFiltered = createSelector(ticketsGetter, filtersGetter, (tickets, filters) => {
  return {
    tickets: compose(
      withFilters(filters),
      withSort
    )(tickets)
  };
});

const withSort = arr => arr.sort((a, b) => (a.stops > b.stops) ? 1 : ((b.stops > a.stops) ? -1 : 0));
const withFilters = filters => arr => arr.filter(item => filters.includes(item.stops));
