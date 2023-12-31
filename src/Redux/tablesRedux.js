import { API_URL } from '../config';
//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

const UPDATE_TABLE_STATUS = createActionName('UPDATE_TABLE_STATUS');

const UPDATE_PEOPLE_AMOUNT = createActionName('UPDATE_PEOPLE_AMOUNT');

const UPDATE_BILL_AMOUNT = createActionName('UPDATE_BILL_AMOUNT');
// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const updateTableStatus = (tableId, status) => (dispatch) => {
  fetch(`${API_URL}/tables/${tableId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  })
    .then((res) => res.json())
    .then((updatedTable) => {
      dispatch({
        type: UPDATE_TABLE_STATUS,
        payload: { tableId, status: updatedTable.status },
      });
    });
};
export const updatePeopleAmount =
  (tableId, peopleAmount, maxPeopleAmount) => (dispatch) => {
    fetch(`${API_URL}/tables/${tableId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ peopleAmount, maxPeopleAmount }),
    })
      .then((res) => res.json())
      .then((updatedTable) => {
        dispatch({
          type: UPDATE_PEOPLE_AMOUNT,
          payload: {
            tableId,
            peopleAmount: updatedTable.peopleAmount,
            maxPeopleAmount: updatedTable.maxPeopleAmount,
          },
        });

        localStorage.setItem(
          'peopleAmountData',
          JSON.stringify({ peopleAmount, maxPeopleAmount })
        );
      });
  };
export const updateBillAmount = (tableId, billAmount) => (dispatch) => {
  return fetch(`${API_URL}/tables/${tableId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bill: billAmount }),
  })
    .then((res) => res.json())
    .then((updatedTable) => {
      dispatch({
        type: UPDATE_BILL_AMOUNT,
        payload: { tableId, bill: updatedTable.bill },
      });
    });
};

export const fetchBillAmount = (tableId) => (dispatch) => {
  fetch(`${API_URL}/tables/${tableId}`)
    .then((res) => res.json())
    .then((table) => {
      dispatch({
        type: UPDATE_BILL_AMOUNT,
        payload: { tableId, bill: table.bill },
      });
    });
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE_TABLE_STATUS:
      return statePart.map((table) =>
        table.id === action.payload.tableId
          ? { ...table, status: action.payload.status }
          : table
      );
    case UPDATE_PEOPLE_AMOUNT:
      return statePart.map((table) =>
        table.id === action.payload.tableId
          ? {
              ...table,
              peopleAmount: action.payload.peopleAmount,
              maxPeopleAmount: action.payload.maxPeopleAmount,
            }
          : table
      );
    case UPDATE_BILL_AMOUNT:
      return statePart.map((table) =>
        table.id === action.payload.tableId
          ? { ...table, bill: action.payload.bill }
          : table
      );
    default:
      return statePart;
  }
};
export default tablesReducer;
