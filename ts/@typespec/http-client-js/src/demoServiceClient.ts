import { Widget } from "./models/models.js";
import { DemoServiceClientContext, DemoServiceClientOptions, createDemoServiceClientContext } from "./api/demoServiceClientContext.js";
import { ListOptions, list, ReadOptions, read, CreateOptions, create, UpdateOptions, update, DeleteOptions, delete_, AnalyzeOptions, analyze } from "./api/widgetsClient/widgetsClientOperations.js";
import { WidgetsClientContext, WidgetsClientOptions, createWidgetsClientContext } from "./api/widgetsClient/widgetsClientContext.js";

export class DemoServiceClient {
  #context: DemoServiceClientContext
  widgetsClient: WidgetsClient
  constructor(endpoint: string, options?: DemoServiceClientOptions) {
    this.#context = createDemoServiceClientContext(endpoint, options);
    this.widgetsClient = new WidgetsClient(endpoint, options);
  }

}
export class WidgetsClient {
  #context: WidgetsClientContext

  constructor(endpoint: string, options?: WidgetsClientOptions) {
    this.#context = createWidgetsClientContext(endpoint, options);

  }
  async list(options?: ListOptions) {
    return list(this.#context, options);
  };
  async read(id: string, options?: ReadOptions) {
    return read(this.#context, id, options);
  };
  async create(body: Widget, options?: CreateOptions) {
    return create(this.#context, body, options);
  };
  async update(id: string, body: Widget, options?: UpdateOptions) {
    return update(this.#context, id, body, options);
  };
  async delete_(id: string, options?: DeleteOptions) {
    return delete_(this.#context, id, options);
  };
  async analyze(id: string, options?: AnalyzeOptions) {
    return analyze(this.#context, id, options);
  }
}