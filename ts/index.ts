export interface Action<Payload> {
  type: string;
  payload: Payload;
}

export type APIAction<Payload> = Action<Promise<Payload>>;

export type ActionCreator<Params, Payload> = (params: Params) => Action<Payload>;

export type APIActionCreator<Params, Payload> = (params: Params) => APIAction<Payload>;

export type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;