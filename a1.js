const moment = require('moment');

let b = {
    barcode: 'TSE0013',
    tansactionID: 'OND00049',
    operation: 'CM-SendIntervalChgNtf',
    powerLimit: null,
    fromDateTime: '2021-12-20T13:44',
    toDateTime: '2021-12-25T13:44',
    fromDate: '',
    toDate: '',
    requestBy: 'HES'
};

console.log(moment(b.fromDateTime).format("YYYY-MM-DD HH:mm:ss"));

