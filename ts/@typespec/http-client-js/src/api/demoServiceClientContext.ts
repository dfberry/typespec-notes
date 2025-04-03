import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface DemoServiceClientContext extends Client {

}export interface DemoServiceClientOptions extends ClientOptions {
  endpoint?: string;
}export function createDemoServiceClientContext(
  endpoint: string,
  options?: DemoServiceClientOptions,): DemoServiceClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}