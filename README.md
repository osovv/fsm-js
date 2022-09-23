# fsm-js

Implementation of [finite-state machine (FSM)](https://en.wikipedia.org/wiki/Finite-state_machine), written in Javascript.

Running the script will determine whether a given FSM is [deterministic](https://en.wikipedia.org/wiki/Deterministic_finite_automaton) or not, and whether the given input data can be traversed with that FSM.

## Description

Finite automaton described as list of possible transitions (check `data/example.txt`)

One line represents one transition:

```
q<N>,<C>=<q|f><N>
```

Syntax:

- `q` - the state of the machine
- `f` - the final state of the machine,
- `<N>` - an arbitrary number denoting the state number
- `<C>` - a **single** character.

Example:

```
q12,g=f0
```

means that if the FSM is in state number 12 and reads the 'g' symbol from the input, it will go to the final state with number 0

## Running the project

```bash
node app.js [file]
```

Notes:

- if the `file` is not given, `data/example.txt` is used
- the parser assumes that the transition list syntax is always correct, behavior in case of incorrect syntax is undefined

## Debugging

Set `DEBUG_ENABLED = true` in `src/constants.mjs` to enable logging and debugger
