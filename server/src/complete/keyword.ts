import { CompletionItemKind } from "vscode-languageserver/node";
export const keywords = [
  {
    label: "STICKLINE",
    kind: CompletionItemKind.Text,
    detail: "STICKLINE details",
    documentation: "STICKLINE documentation",
    preselect: true,
    filterText: "STICKLINE",
  },
];
