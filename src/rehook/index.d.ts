declare module '@team-griffin/rehook' {
  import { ComponentType, Component } from 'react';
  /**
   * 
   * @param condition
   * @param left
   * @param right
   * @returns
   */
  export function branch<A, B, C>(condition: (props: A) => boolean, left: (props: A) => B, right?: (props: A) => C): B | C;

  /**
   * 
   * @param component
   * @returns
   */
  export function catchRender<A>(component: ComponentType<A>): any;

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
  interface RenamableProp<S extends string, V> extends RenamablePropA<S, V>, RenamablePropB {}
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
  export function renderComponent(comp: any): any;

  /**
   * 
   * @returns
   */
  export function renderNothing(): any;

  /**
   * 
   * @param handlers
   * @returns
   */
  export function withHandlers<A, H>(
    handlers: {
      [K in keyof H]: (props: A) => H[K]
    },
  ): (props: A) => A & H;

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
  export function withState(stateName: string | symbol, stateUpdaterName: string | symbol, initialState: any): any;
}
