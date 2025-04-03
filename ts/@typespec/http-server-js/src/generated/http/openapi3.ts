// Generated by Microsoft TypeSpec

export const openApiDocument = {
  openapi: "3.0.0",
  info: { title: "Widget Service", version: "0.0.0" },
  tags: [{ name: "Widgets" }],
  paths: {
    "/widgets": {
      get: {
        operationId: "Widgets_list",
        description: "List widgets",
        parameters: [],
        responses: {
          "200": {
            description: "The request has succeeded.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/WidgetList" },
              },
            },
          },
          default: {
            description: "An unexpected error response.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
        tags: ["Widgets"],
      },
      post: {
        operationId: "Widgets_create",
        description: "Create a widget",
        parameters: [],
        responses: {
          "200": {
            description: "The request has succeeded.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Widget" },
              },
            },
          },
          default: {
            description: "An unexpected error response.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
        tags: ["Widgets"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Widget" },
            },
          },
        },
      },
    },
    "/widgets/{id}": {
      get: {
        operationId: "Widgets_read",
        description: "Read widgets",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The request has succeeded.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Widget" },
              },
            },
          },
          default: {
            description: "An unexpected error response.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
        tags: ["Widgets"],
      },
      patch: {
        operationId: "Widgets_update",
        description: "Update a widget",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The request has succeeded.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Widget" },
              },
            },
          },
          default: {
            description: "An unexpected error response.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
        tags: ["Widgets"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/WidgetUpdate" },
            },
          },
        },
      },
      delete: {
        operationId: "Widgets_delete",
        description: "Delete a widget",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "204": {
            description:
              "There is no content to send for this request, but the headers may be useful. ",
          },
          default: {
            description: "An unexpected error response.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
        tags: ["Widgets"],
      },
    },
    "/widgets/{id}/analyze": {
      post: {
        operationId: "Widgets_analyze",
        description: "Analyze a widget",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The request has succeeded.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/AnalyzeResult" },
              },
            },
          },
          default: {
            description: "An unexpected error response.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Error" },
              },
            },
          },
        },
        tags: ["Widgets"],
      },
    },
  },
  components: {
    schemas: {
      Widget: {
        type: "object",
        required: ["id", "weight", "color"],
        properties: {
          id: { type: "string" },
          weight: { type: "integer", format: "int32" },
          color: { type: "string", enum: ["red", "blue"] },
        },
      },
      WidgetList: {
        type: "object",
        required: ["items"],
        properties: {
          items: {
            type: "array",
            items: { $ref: "#/components/schemas/Widget" },
          },
        },
      },
      Error: {
        type: "object",
        required: ["code", "message"],
        properties: {
          code: { type: "integer", format: "int32" },
          message: { type: "string" },
        },
      },
      WidgetUpdate: {
        type: "object",
        properties: {
          id: { type: "string" },
          weight: { type: "integer", format: "int32" },
          color: { type: "string", enum: ["red", "blue"] },
        },
      },
      AnalyzeResult: {
        type: "object",
        required: ["id", "analysis"],
        properties: { id: { type: "string" }, analysis: { type: "string" } },
      },
    },
  },
};
