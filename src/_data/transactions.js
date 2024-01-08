// _data/transactions.js
module.exports = function () {
  const transactions = [
    // ... your transaction data ...
    {
      TransactionId: "001",
      TransactionReference: "",
      CounterParty: "McDonald's",
      Amount: {
        Amount: "10.50",
        Currency: "GBP",
      },
      CreditDebitIndicator: "Debit",
      Status: "Booked",
      BookingDateTime: "2024-05-03T14:22:09+00:00",
    },
    {
      TransactionId: "002",
      TransactionReference: "",
      CounterParty: "BT",
      Amount: {
        Amount: "29.99",
        Currency: "GBP",
      },
      CreditDebitIndicator: "Debit",
      Status: "Booked",
      BookingDateTime: "2024-05-02T14:22:12+03:22",
    },
    {
      TransactionId: "003",
      TransactionReference: "",
      CounterParty: "McDonald's",
      Amount: {
        Amount: "6.80",
        Currency: "GBP",
      },
      CreditDebitIndicator: "Debit",
      Status: "Booked",
      BookingDateTime: "2024-05-02T14:22:12+03:22",
    },
  ];

  // Group transactions by date
  const groupedTransactions = transactions.reduce((grouped, transaction) => {
    const date = new Date(transaction.BookingDateTime).toLocaleDateString();

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push(transaction);

    return grouped;
  }, {});

  return {
    transactions,
    groupedTransactions,
  };
};
