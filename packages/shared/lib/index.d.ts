export declare const hasOwn: (val: object, key: string | symbol) => key is never;
export declare const isArray: (arg: any) => arg is any[];
export declare const isFunction: (val: unknown) => val is Function;
export declare const isString: (val: unknown) => val is string;
export declare const isSymbol: (val: unknown) => val is symbol;
export declare const isObject: (val: unknown) => val is Record<any, any>;
export declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;
export declare function freeze<T extends Object>(value: T): T;
