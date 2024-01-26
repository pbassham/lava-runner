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
import { LavaConfigProvider } from './lavaConfigProvider';
import { LavaConfigItem } from './lavaConfigItem';
import { LavaConfigViewProvider } from './lavaConfigViewProvider';

export function activate(context: vscode.ExtensionContext) {
	let currentPanel: vscode.WebviewPanel | undefined = undefined;

    let runLavaFileCommand = vscode.commands.registerCommand('extension.runLavaFile', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const content = editor.document.getText();
            const config = vscode.workspace.getConfiguration('lavaRunner');
            const endpoint = config.get('endpoint') as string;
            const apiKey = config.get('apiKey') as string;
            const person = config.get('person') as string;
            const group = config.get('group') as string;

            // axios.post(endpoint, {
            //     content,
            //     person,
            //     group
            // }, {
            axios.post(endpoint, content, {
                headers: { 'Authorization-Token': `${apiKey}` }
            }).then(response => {
                
				const responseHtml = response.data;
            const rootUrl = vscode.workspace.getConfiguration('lavaRunner').get('rootUrl') as string;

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

	// const lavaConfigProvider = new LavaConfigProvider(context);
    // vscode.window.registerTreeDataProvider('lavaRunnerConfigPanel', lavaConfigProvider);

    // // Register command to edit configuration
    // const editConfigCommand = vscode.commands.registerCommand('lavaRunner.editConfig', async (key: string) => {
    //     const config = vscode.workspace.getConfiguration('lavaRunner');
    //     const currentValue = config.get<string>(key) || '';

    //     const newValue = await vscode.window.showInputBox({
    //         prompt: `Enter new value for ${key}`,
    //         value: currentValue
    //     });

    //     if (newValue !== undefined) {
    //         config.update(key, newValue, vscode.ConfigurationTarget.Global);
    //         lavaConfigProvider.refresh();
    //     }
    // });

    // context.subscriptions.push(editConfigCommand);

	// const lavaRunnerConfigPanel = vscode.window.createWebviewPanel(
    //     'lavaRunnerConfig',
    //     'Lava Runner Settings',
    //     {
    //         viewColumn: vscode.ViewColumn.Active,
    //         preserveFocus: true
    //     },
    //     {
    //         enableScripts: true,
    //         retainContextWhenHidden: true // Keep the state of the webview when it's hidden
    //     }
    // );

    // lavaRunnerConfigPanel.webview.html = getWebviewContent();

	// function getWebviewContent() {
	// 	// Here, you would return the HTML content for your configuration form.
	// 	// For simplicity, this is just a placeholder.
	// 	return `
	// 	<!DOCTYPE html>
	// 	<html lang="en">
	// 	<head>
	// 		<meta charset="UTF-8">
	// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	// 		<title>Lava Runner Settings</title>
	// 	</head>
	// 	<body>
	// 		<!-- Your HTML form and elements go here -->
	// 		<form id="settings-form">
	// 			<!-- Form elements for key/value pairs -->
	// 		</form>
	// 		<button id="add-setting">Add Setting</button>
			
	// 		<script>
	// 			// This is the webview content script
	// 			const vscode = acquireVsCodeApi();
		
	// 			// Handle the form submission
	// 			document.getElementById('settings-form').addEventListener('submit', (event) => {
	// 				event.preventDefault();
	// 				// Gather your key/value pairs from the form
	// 				const settings = {/* ... */};
	// 				vscode.postMessage({
	// 					command: 'saveSettings',
	// 					settings: settings
	// 				});
	// 			});
		
	// 			// Handle button clicks or other events
	// 			document.getElementById('add-setting').addEventListener('click', (event) => {
	// 				// Code to add a new key/value pair input to the form
	// 			});
		
	// 			// More code to manage the settings form
	// 		</script>
	// 	</body>
	// 	</html>
		
	// 	`;
	// }

    // You can now use webview messaging to communicate between your extension and the webview
    // to save and retrieve the configuration settings





	const lavaConfigProvider = new LavaConfigViewProvider(context.extensionUri);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            LavaConfigViewProvider.viewType,
            lavaConfigProvider
        )
    );
}

export function deactivate() {}
