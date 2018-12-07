angular.module('rdai')
  .filter('transactionType', function () {
    return function (type) {
      if (type) {
        return ZbsRdai.GetTransactionType(type);
      }
    };
  })
  .filter('transactionTime', function () {
    return function (timestamp) {
      if (timestamp) {
        return (new Date(timestamp)).toLocaleString();
      }
    };
  });
