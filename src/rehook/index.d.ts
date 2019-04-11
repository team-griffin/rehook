declare module '@team-griffin/rehook' {
  /**
   * 
   * @param condition
   * @param left
   * @param right
   * @returns
   */
  export function branch(condition: Function, left: Function, right: Function): Function;

  /**
   * 
   * @param component
   * @returns
   */
  export function catchRender(component: Function): any;

  /**
   * 
   * @param defaultProps
   * @returns
   */
  export function defaultProps(defaultProps: Object): any;

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
  export function lifecycle(spec: Object): any;

  /**
   * 
   * @param fn
   * @returns
   */
  export function mapProps(fn: Function): any;

  /**
   * 
   * @param propName
   * @param enhance
   * @returns
   */
  export function namespace(propName: string | symbol, enhance: Function): any;

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
  export function renameProp(a: string | symbol, b: string | symbol): any;

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
  export function withHandlers(handlers: Object): any;

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
  export function withProps(fn: Function | Object): void;

  /**
   * 
   * @param stateName
   * @param dispatchName
   * @param reducer
   * @param initialValue
   */
  export function withReducer(stateName: string | symbol, dispatchName: string | symbol, reducer: Function, initialValue: any): void;

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
  export function withState(stateName: string | symbol, stateUpdaterName: string | symbol, initialState: any): void;
}