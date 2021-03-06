declare module '@team-griffin/rehook' {
  import { ComponentType, Component } from 'react';
  import { Omit } from 'utility-types';
  /**
   * 
   * @param condition
   * @param left
   * @param right
   * @returns
   */
  export function branch<A, B>(
    condition: (props: A) => boolean,
    left: (props: A) => B,
  ): (props: A) => B;
  export function branch<A, B, C>(
    condition: (props: A) => boolean,
    left: (props: A) => B,
    right?: (props: A) => C
  ): (props: A) => (B | C);

  /**
   * 
   * @param component
   * @returns
   */
  export function catchRender<A>(component: ComponentType<A>): ComponentType<A>;

  /**
   * 
   * @param defaultProps
   * @returns
   */
  export function defaultProps<A, B>(defaultProps: B | ((props: A) => B)): (props: A) => B & A;

  /**
   * 
   * @param propName
   * @returns
   */
  export function flattenProp(propName: string | symbol): any;

  /**
   * 
   * @param spec
   * @returns
   */
  export function lifecycle<A>(spec: {
    componentDidMount?: (this: Component<A>) => void,
    componentWillUnmount?: (this: Component<A>) => void,
    componentDidUpdate?: (this: Component<A>) => void,
  }): (props: A) => A;

  /**
   * 
   * @param fn
   * @returns
   */
  export function mapProps<A, B>(fn: (props: A) => B): (props: A) => B;

  export function tap<A>(fn: (props: A) => any): (props: A) => A;

  /**
   * 
   * @param propName
   * @param enhance
   * @returns
   */
  export function namespace<A, B, C extends string>(propName: C, enhance: (props: A) => B): (props: A) => A & { [T in C]: B};

  /**
   * 
   * @param fns
   * @returns
   */
  export function pipe(...fns: any[]): any;

  /**
   * 
   * @param a
   * @param b
   * @returns
   */
  type RenamablePropA<S extends string, V> = {
    [K in S]: V
    // [key: string]: any,
  };
  type RenamablePropB = {
    [key: string]: any,
  }

  type RenamableProp<S extends string, V> = RenamablePropA<S, V> & RenamablePropB;
  export function renameProp<S extends string, T extends string, V, A extends RenamableProp<S, V>>(a: S, b: T): (props: A) => Pick<A, Exclude<keyof A, A>> & { [K in T]: V};

  /**
   * 
   * @param propMap
   * @returns
   */
  export function renameProps(propMap: Object): any;

  /**
   * 
   * @param comp
   * @returns
   */
  export function renderComponent<A>(component: ComponentType<A>): (props: A) => A;

  /**
   * 
   * @returns
   */
  export function renderNothing(): any;

  type HandlerInner = (...args: any[]) => any;
  type Handler<A> = (props: A) => HandlerInner;
  type Handlers<A> = {
    [key: string]: Handler<A>,
  };
  /**
   * 
   * @param handlers
   * @returns
   */
  export function withHandlers<A, H extends Handlers<A>>(
    handlers: H,
  ): (props: A) => A & {
    [K in keyof H]: ReturnType<H[K]>
  };

  /**
   * 
   * @param shouldMapOrKeys
   * @param createProps
   * @returns
   */
  export function withPropsOnChange(shouldMapOrKeys: any, createProps: Function): any;

  /**
   * 
   * @param fn
   */
  export function withProps<A, B>(
    fn: ((props: A) => B) | B,
  ): (props: A) => A & B;

  export function withProp<A, B, S extends string>(
    key: S,
    fn: ((props: A) => B) | B
  ): A & {
    [K in S]: B
  }

  export function omitProps<K extends string>(keys: K[]): <A>(props: A) => Omit<A, K>

  /**
   * 
   * @param stateName
   * @param dispatchName
   * @param reducer
   * @param initialValue
   */
  export function withReducer<A, S extends string, T extends string, V>(
    stateName: S,
    dispatchName: T,
    reducer: Function,
    initialValue: V,
  ): (props: A) => A & { [K in S]: V } & { [K in T]: Function };

  /**
   * 
   * @param initialValue
   * @param handlers
   * @returns
   */
  export function withStateHandlers(initialValue: any, handlers: Object): any;

  /**
   * 
   * @param stateName
   * @param stateUpdaterName
   * @param initialState
   */
  export function withState<A extends string, B extends string, T, P>(
    stateName: A,
    stateUpdaterName: B,
    initialState: (props: P) => T,
  ): (props: P) => P & { [K in A]: T } & { [K in B]: (v: T) => void };
  export function withState<A extends string, B extends string, T>(
    stateName: A,
    stateUpdaterName: B,
    initialState: T,
  ): <P>(props: P) => P & { [K in A]: T } & { [K in B]: (v: T) => void };
}
