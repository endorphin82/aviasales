import { compose } from "recompose";
// export const ticketsGetter = state => ({
//   tickets: state.tickets.tickets.sort((a, b) => (a.stops > b.stops) ? 1 : ((b.stops > a.stops) ? -1 : 0))
// })
const filters = [3, 1];
export const ticketsGetter = state => {
  return {
    tickets: compose(
      withFilters(filters),
      withSort
    )(state.tickets.tickets)
  };
};
const withSort = arr => arr.sort((a, b) => (a.stops > b.stops) ? 1 : ((b.stops > a.stops) ? -1 : 0));
const withFilters = filters => arr => {
  return arr.filter(item => filters.includes(item.stops));
};