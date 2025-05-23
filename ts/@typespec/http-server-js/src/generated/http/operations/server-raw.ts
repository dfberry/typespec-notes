// Generated by Microsoft TypeSpec

import { HttpContext } from "../../helpers/router.js";

import {
  isHttpResponder as __isHttpResponder_0,
  HTTP_RESPONDER as __httpResponderSymbol_1,
} from "../../helpers/http.js";

import {
  Widgets,
  WidgetList,
  Error,
  Widget,
  AnalyzeResult,
} from "../../models/all/demo-service.js";

import { parseHeaderValueParameters } from "../../helpers/header.js";

export async function widgets_list(
  __ctx_2: HttpContext,
  __operations_4: Widgets,
): Promise<void> {
  let __result_3: WidgetList | Error;

  try {
    __result_3 = await __operations_4.list(__ctx_2);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_2);
    } else throw e;
  }

  if ("items" in __result_3) {
    __ctx_2.response.setHeader("content-type", "application/json");
    __ctx_2.response.end(JSON.stringify(__result_3));
  } else if ("code" in __result_3) {
    __ctx_2.response.setHeader("content-type", "application/json");
    __ctx_2.response.end(JSON.stringify(__result_3));
  }
}

export async function widgets_read(
  __ctx_6: HttpContext,
  __operations_8: Widgets,
  // @ts-ignore: Suppress TS6133 for unused variable 'id'
  id: string,
): Promise<void> {
  let __result_7: Widget | Error;

  try {
    __result_7 = await __operations_8.read(__ctx_6, id);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_6);
    } else throw e;
  }

  if ("id" in __result_7) {
    __ctx_6.response.setHeader("content-type", "application/json");
    __ctx_6.response.end(JSON.stringify(__result_7));
  } else if ("code" in __result_7) {
    __ctx_6.response.setHeader("content-type", "application/json");
    __ctx_6.response.end(JSON.stringify(__result_7));
  }
}

export async function widgets_create(
  __ctx_10: HttpContext,
  __operations_12: Widgets,
): Promise<void> {
  const __contentType_15 = parseHeaderValueParameters(
    __ctx_10.request.headers["content-type"] as string | undefined,
  );
  if (__contentType_15?.value !== "application/json") {
    return __ctx_10.errorHandlers.onInvalidRequest(
      __ctx_10,
      "/widgets",
      `unexpected "content-type": '${__contentType_15?.value}', expected '"application/json"'`,
    );
  }

  const __body_14 = (await new Promise(function parseBody(resolve, reject) {
    const chunks: Array<Buffer> = [];
    __ctx_10.request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    __ctx_10.request.on("end", function finalize() {
      try {
        const body = Buffer.concat(chunks).toString();
        resolve(JSON.parse(body));
      } catch {
        __ctx_10.errorHandlers.onInvalidRequest(
          __ctx_10,
          "/widgets",
          "invalid JSON in request body",
        );
        reject();
      }
    });
    __ctx_10.request.on("error", reject);
  })) as Widget;

  let __result_11: Widget | Error;

  try {
    __result_11 = await __operations_12.create(__ctx_10, __body_14);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_10);
    } else throw e;
  }

  if ("id" in __result_11) {
    __ctx_10.response.setHeader("content-type", "application/json");
    __ctx_10.response.end(JSON.stringify(__result_11));
  } else if ("code" in __result_11) {
    __ctx_10.response.setHeader("content-type", "application/json");
    __ctx_10.response.end(JSON.stringify(__result_11));
  }
}

export async function widgets_update(
  __ctx_16: HttpContext,
  __operations_18: Widgets,
  // @ts-ignore: Suppress TS6133 for unused variable 'id'
  id: string,
): Promise<void> {
  const __contentType_21 = parseHeaderValueParameters(
    __ctx_16.request.headers["content-type"] as string | undefined,
  );
  if (__contentType_21?.value !== "application/json") {
    return __ctx_16.errorHandlers.onInvalidRequest(
      __ctx_16,
      "/widgets/{id}",
      `unexpected "content-type": '${__contentType_21?.value}', expected '"application/json"'`,
    );
  }

  const __body_20 = (await new Promise(function parseBody(resolve, reject) {
    const chunks: Array<Buffer> = [];
    __ctx_16.request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    __ctx_16.request.on("end", function finalize() {
      try {
        const body = Buffer.concat(chunks).toString();
        resolve(JSON.parse(body));
      } catch {
        __ctx_16.errorHandlers.onInvalidRequest(
          __ctx_16,
          "/widgets/{id}",
          "invalid JSON in request body",
        );
        reject();
      }
    });
    __ctx_16.request.on("error", reject);
  })) as Widget;

  let __result_17: Widget | Error;

  try {
    __result_17 = await __operations_18.update(
      __ctx_16,
      __body_20.id,
      __body_20,
    );
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_16);
    } else throw e;
  }

  if ("id" in __result_17) {
    __ctx_16.response.setHeader("content-type", "application/json");
    __ctx_16.response.end(JSON.stringify(__result_17));
  } else if ("code" in __result_17) {
    __ctx_16.response.setHeader("content-type", "application/json");
    __ctx_16.response.end(JSON.stringify(__result_17));
  }
}

export async function widgets_delete(
  __ctx_22: HttpContext,
  __operations_24: Widgets,
  // @ts-ignore: Suppress TS6133 for unused variable 'id'
  id: string,
): Promise<void> {
  let __result_23: void | Error;

  try {
    __result_23 = await __operations_24.delete(__ctx_22, id);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_22);
    } else throw e;
  }

  if (__result_23 === undefined) {
    __ctx_22.response.statusCode = 204;
    __ctx_22.response.end();
  } else {
    if ("code" in __result_23) {
      __ctx_22.response.setHeader("content-type", "application/json");
      __ctx_22.response.end(JSON.stringify(__result_23));
    }
  }
}

export async function widgets_analyze(
  __ctx_26: HttpContext,
  __operations_28: Widgets,
  // @ts-ignore: Suppress TS6133 for unused variable 'id'
  id: string,
): Promise<void> {
  let __result_27: AnalyzeResult | Error;

  try {
    __result_27 = await __operations_28.analyze(__ctx_26, id);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_26);
    } else throw e;
  }

  if ("id" in __result_27) {
    __ctx_26.response.setHeader("content-type", "application/json");
    __ctx_26.response.end(JSON.stringify(__result_27));
  } else if ("code" in __result_27) {
    __ctx_26.response.setHeader("content-type", "application/json");
    __ctx_26.response.end(JSON.stringify(__result_27));
  }
}
