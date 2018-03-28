import * as R from 'ramda';
import { CoreModuleName } from '@/utils/createCoreModule';
import { CorePath } from '@/utils/CoreAPI';
import { StoreRow } from '@/store/types';

/** Type for object with UUID */
type ObjectWithUUID<T extends object> = T & { uuid: string };

/** check if object has uuid */
export function hasUUID<T extends object>(obj: T): obj is ObjectWithUUID<T> {
  return R.has('uuid', obj);
}

/** check if object is undefined */
export function rowNotFound<T>(row?: StoreRow<T>): row is undefined {
  return (row === undefined);
}

/** check if object is instance of response */
export function isResponse(response: any): response is Response {
  return (response instanceof Response);
}


/** Map for modules */
// tslint:disable-next-line:variable-name
export const CoreModuleNames: CoreModuleName[] = [
  'farmer',
  'milk',
  'delivery',
  'trader',
  'admin',
  'monitor',
  // 'loan', TODO: Enable when implemented
];

/**
 * Get the module path for the specified module
 *
 * @param module Module to retrieve path for
 */
export function getModulePath(module: CoreModuleName): CorePath {
  switch (module) {
    case 'farmer': return '/people/farmers';

    case 'milk': return '/transactions/products/milk';

    case 'delivery': return '/productExports';

    case 'loan': return '/transactions/money/loans';

    case 'trader': return '/people/traders';

    case 'admin': return '/people/admins';

    case 'monitor': return '/people/monitors';

    default: throw new Error(`No such module/path mapping for module ${module}`);
  }
}
