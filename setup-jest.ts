// tslint:disable-next-line:no-implicit-dependencies
import 'jest-preset-angular';
import { noop } from 'rxjs';

window.matchMedia = window.matchMedia || (() => ({
  addListener: noop,
  matches: false,
  removeListener: noop,
}) as any);
