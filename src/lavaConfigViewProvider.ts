import * as vscode from 'vscode';

export class LavaConfigViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'lavaRunnerConfigView';

    constructor(private readonly _extensionUri: vscode.Uri) {}

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        token: vscode.CancellationToken,
    ) {
        webviewView.webview.options = {
            enableScripts: true, // Enable JavaScript in the webview
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        // Handle messages from the webview
        webviewView.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'someCommand':
                        // Handle the command
                        break;
                    // Add more commands if needed...
                }
            },
            undefined,
            // ...other setup code
        );
    }

    private _getHtmlForWebview(webview: vscode.Webview): string {
        // Uri to load styles into webview
        const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'style.css'));

        // Use a nonce to whitelist which scripts can be run
        const nonce = getNonce();

        const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <!-- ... -->
                <link href="${styleUri}" rel="stylesheet">
            </head>
            <body>
                <h1>Lava Configuration</h1>
                <!-- Add your form and settings UI here -->
                <script nonce="${nonce}">
                    // JavaScript to handle the form submission and messages to the extension
                </script>
            </body>
            </html>`;
        return html;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
