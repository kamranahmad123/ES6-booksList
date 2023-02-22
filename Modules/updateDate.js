import { DateTime } from './luxon.js';

const date = () => {
  const output = DateTime.local();
  document.getElementById('Date').innerHTML = output.toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
};

export default date;
