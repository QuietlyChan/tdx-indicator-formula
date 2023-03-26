import { WebviewView, WebviewViewProvider } from 'vscode';

export class TdxHelpWebview implements WebviewViewProvider {
  public static viewId = "tdx-help-view";

  resolveWebviewView(webviewView: WebviewView): void | Thenable<void> {
    webviewView.webview.html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>todolist</title>
      </head>
      <body>
        <div>hello todolist</div>
      </body>
      </html>
    `;
  }
}