import { CompletionItemKind } from "vscode-languageserver/node";
export const keywords = [
  {
    label: "HIGH",
    detail: "最高价",
    documentation: `
    返回该周期最高价.
    用法:
    HIGH
    `,
  },
  {
    label: "H",
    detail: "最高价",
    documentation: `
    返回该周期最高价.
    用法:
    同HIGH
    `,
  },
  {
    label: "LOW",
    detail: "最低价",
    documentation: `
    返回该周期最低价.
    用法:
    LOW
    `,
  },
  {
    label: "L",
    detail: "最低价",
    documentation: `
    返回该周期最低价.
    用法:
    同LOW
    `,
  },
  {
    label: "CLOSE",
    detail: "收盘价",
    documentation: `
    返回该周期收盘价.
    用法:
    CLOSE
    `,
  },
  {
    label: "C",
    detail: "收盘价",
    documentation: `
    返回该周期收盘价.
    用法:
    同CLOSE
    `,
  },
  {
    label: "VOL",
    detail: "成交量（手）",
    documentation: `
    返回该周期成交量.
    用法:
    VOL
    `,
  },
  {
    label: "V",
    detail: "成交量（手）",
    documentation: `
    返回该周期成交量.
    用法:
    同VOL
    `,
  },
];
