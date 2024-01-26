// src/lavaConfigProvider.ts
import * as vscode from 'vscode';
import { LavaConfigItem } from './lavaConfigItem';

// export class LavaConfigProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
//     private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined | null | void> = new vscode.EventEmitter<vscode.TreeItem | undefined | null | void>();
//     readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | null | void> = this._onDidChangeTreeData.event;

//     getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
//         return element;
//     }

//     getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
//         if (element) {
//             // Return children of the element
//             return Promise.resolve([]);
//         } else {
//             // Return root-level configuration options
//             return Promise.resolve([
//                 new vscode.TreeItem('Person'),
//                 new vscode.TreeItem('Group')
//                 // Add more configuration options here
//             ]);
//         }
//     }

//     // Add methods to handle configuration changes
// }

export class LavaConfigProvider implements vscode.TreeDataProvider<LavaConfigItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<LavaConfigItem | undefined | null | void> = new vscode.EventEmitter<LavaConfigItem | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<LavaConfigItem | undefined | null | void> = this._onDidChangeTreeData.event;

    constructor(private context: vscode.ExtensionContext) {}

    getTreeItem(element: LavaConfigItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: LavaConfigItem): Thenable<LavaConfigItem[]> {
        if (element) {
            // Return children of the element
            return Promise.resolve([]);
        } else {
            // Return root-level configuration options
            const config = vscode.workspace.getConfiguration('lavaRunner');
            return Promise.resolve([
                new LavaConfigItem('Person', config.get('person') || '', {
                    title: "Edit Person",
                    command: "lavaRunner.editConfig",
                    arguments: ["Person"]
                }),
                new LavaConfigItem('Group', config.get('group') || '', {
                    title: "Edit Group",
                    command: "lavaRunner.editConfig",
                    arguments: ["Group"]
                })
                // Add more configuration options here
            ]);
        }
    }

    // Method to refresh the view
    refresh(): void {
        this._onDidChangeTreeData.fire();
    }
}