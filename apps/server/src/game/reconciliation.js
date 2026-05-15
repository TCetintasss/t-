function reconcileState(serverState, clientState) {
  if (!clientState) {
    return serverState;
  }

  return {
    ...serverState,
    hp: Math.min(serverState.hp, clientState.hp || serverState.hp),
    gold: serverState.gold,
    stage: serverState.stage,
    inventory: serverState.inventory
  };
}

module.exports = {
  reconcileState
};
