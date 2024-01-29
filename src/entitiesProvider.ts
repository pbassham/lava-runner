import * as vscode from 'vscode';
import axios from 'axios';

class Entity extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }
}

export class EntitiesProvider implements vscode.TreeDataProvider<Entity> {
  private _onDidChangeTreeData: vscode.EventEmitter<Entity | undefined | null | void> = new vscode.EventEmitter<Entity | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<Entity | undefined | null | void> = this._onDidChangeTreeData.event;

  private entitiesCache: Entity[] | undefined;

  async getTreeItem(element: Entity): Promise<vscode.TreeItem> {
    return element;
  }

  async getChildren(element?: Entity): Promise<Entity[]> {
    if (!this.entitiesCache) {
      await this.fetchEntities();
    }
    return this.entitiesCache ?? [];
  }

  async refresh(): Promise<void> {
    await this.fetchEntities();
    this._onDidChangeTreeData.fire();
  }

  private async fetchEntities(): Promise<void> {
    try {
      const config = vscode.workspace.getConfiguration("lavaRunner");
        const apiKey = config.get("apiKey") as string;
        const rootUrl = config.get("rootUrl") as string;

      const response = await axios.get(`${rootUrl}/api/EntityTypes`,{
        headers: { "Authorization-Token": `${apiKey}` },
        params: {  
            // $select: 'FriendlyName',
            $filter: 'IsEntity eq true',
            $orderby: 'FriendlyName'
         }
      });
      const entitiesData = response.data; // Assuming the response data is an array of entity names
    //   this.entitiesCache = entitiesData.map((name: string) => new Entity(name, vscode.TreeItemCollapsibleState.None));
    this.entitiesCache = entitiesData.map((entity: any) => new Entity(entity.FriendlyName, vscode.TreeItemCollapsibleState.None));
    } catch (error) {
      vscode.window.showErrorMessage(`'Failed to fetch entities' ${error}`);
    }
  }
}
