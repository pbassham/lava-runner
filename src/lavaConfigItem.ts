// src/lavaConfigItem.ts
import * as vscode from 'vscode';

export class LavaConfigItem extends vscode.TreeItem {
    constructor(
        public readonly key: string,
        public value: string,
        public readonly command?: vscode.Command
    ) {
        super(key, vscode.TreeItemCollapsibleState.None);
        this.description = value;
        this.contextValue = 'configItem';
        this.tooltip = `Current value: ${value}`;
    }
}
