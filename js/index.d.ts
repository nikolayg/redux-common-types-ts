export interface Action<Payload> {
    type: string;
    payload: Payload;
}
export declare type APIAction<Payload> = Action<Promise<Payload>>;
export declare type ActionCreator<Params, Payload> = (params: Params) => Action<Payload>;
export declare type APIActionCreator<Params, Payload> = (params: Params) => APIAction<Payload>;
export declare type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;
