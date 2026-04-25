const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const transactions = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 150, status: "completed" },
  { id: 4, amount: 300, status: "failed" },
];

function groupTransactionsByStatus(
  transactions: Array<{ id: number; amount: number; status: string }>,
) {
  const group = new Map<
    string,
    Array<{ id: number; amount: number; status: string }>
  >();

  for (const transaction of transactions) {
    const currentGroup = group.get(transaction.status) || [];
    currentGroup.push(transaction);
    group.set(transaction.status, currentGroup);
  }
  return group;
}
