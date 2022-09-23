function isDeterministic(transitionsTable) {
  return (
    Array.from(transitionsTable.values()).filter((v) => v.length > 1).length ===
    0
  );
}

export { isDeterministic };
