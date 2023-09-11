import { createMachine } from 'xstate';
import { create } from 'zustand';
import xstate from 'zustand-middleware-xstate';

// eslint-disable-next-line @typescript-eslint/ban-types
type Context = {};
type States = {
  value: 'light' | 'dark';
  context: Context;
};
type Events = { type: 'SWITCH' };

const lightMachine = createMachine<Context, Events, States>({
  id: 'theme',
  predictableActionArguments: true,
  initial: 'light',
  states: {
    light: {
      on: {
        SWITCH: 'dark',
      },
    },
    dark: {
      on: {
        SWITCH: 'light',
      },
    },
  },
});

const useTheme = create(xstate(lightMachine));

export default useTheme;
