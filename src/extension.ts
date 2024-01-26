// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "lava-tester" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('lava-tester.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Lava Tester!');
	// });

	// context.subscriptions.push(disposable);
// }

// This method is called when your extension is deactivated
// export function deactivate() {}

import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
	let currentPanel: vscode.WebviewPanel | undefined = undefined;

    let runLavaFileCommand = vscode.commands.registerCommand('extension.runLavaFile', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const content = editor.document.getText();
            const config = vscode.workspace.getConfiguration('lavaRunner');
            const apiKey = config.get('apiKey') as string;
            const rootUrl = config.get('rootUrl') as string;
            const endpoint = config.get('endpoint') as string;

            axios.post(`${rootUrl}${endpoint}`, content, {
                headers: { 'Authorization-Token': `${apiKey}` }
            }).then(response => {
                
				const responseHtml = response.data;

            // Include the base tag in the HTML content
            const htmlWithBase = `<!DOCTYPE html>
<html>
<head>
    <base href="${rootUrl}/">
    <!-- Other head content -->
</head>
<body>
    ${responseHtml}
</body>
</html>`;


				if (currentPanel) {
                    // If the webview is already open, reveal it and update its content
                    // currentPanel.webview.html = response.data;
                    currentPanel.webview.html = responseHtml;
                    currentPanel.reveal(vscode.ViewColumn.Beside);
                } else {
                    // Otherwise, create a new webview panel
                    currentPanel = vscode.window.createWebviewPanel(
                        'lavaResults',
                        'Lava Results',
                        vscode.ViewColumn.Beside,
                        {}
                    );

                    currentPanel.webview.html = responseHtml;

                    // Reset when the current panel is closed
                    currentPanel.onDidDispose(() => {
                        currentPanel = undefined;
                    }, null, context.subscriptions);
                }
            }).catch(err => {
                vscode.window.showErrorMessage('Error running Lava file: ' + err.message);
            });
        }
    });

    context.subscriptions.push(runLavaFileCommand);

}

export function deactivate() {}
