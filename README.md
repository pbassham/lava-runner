# Lava Runner for VSCode

Welcome to **Lava Runner** for VSCode, an extension designed specifically for developers working with Lava code in the context of the RockRMS church management system. This extension enables you to run Lava code remotely on a RockRMS server, directly from your local development environment. With Lava Runner, you can execute your Lava code and view the results through a convenient preview window, similar to how the 'Lava Tester' plugin works for the frontend of Rock, but without leaving the comfort and power of the VSCode editor.

## Preview 
### See Lava code results
![](https://raw.githubusercontent.com/pbassham/lava-runner/master/images/preview-vars.png)

### Settings
![](https://raw.githubusercontent.com/pbassham/lava-runner/master/images/preview-settings.png)

### Entity Tree
![](https://raw.githubusercontent.com/pbassham/lava-runner/master/images/preview-entities.png)

### Shortcodes and Bootstrap CSS
![](https://raw.githubusercontent.com/pbassham/lava-runner/master/images/preview-shortcode.png)

### Simply Click to Launch Preview 
![](https://raw.githubusercontent.com/pbassham/lava-runner/master/images/preview-run-button.png)

## Features

- **Remote Execution:** Send the current Lava file as the body of an API call to a RockRMS server for execution.
- **Real-time Results:** View execution results in a dedicated preview window within VSCode.
- **Streamlined Workflow:** Eliminates the need for manual file transfers or separate testing environments, making your development process faster and more efficient.
- **Secure Connection:** Utilizes secure API calls to ensure your code and data remain protected.
- **Use With Magnus:** Lava Runner can run lava in files seamlessly with the [Magnus](https://github.com/Triumph-Tech/magnus-vscode) extension for VSCode, enabling you to run Lava code locally or remotely with a single click.
- **Use Your CSS:** Lava Runner uses the CSS from your RockRMS site to style the preview window. This means you can see how your Lava code will look on your site.

## Roadmap
- [x] Enable image preview (blocked because CORS)
- [x] Embed stylesheet in preview
- [-] Make entity tree in sidebar
- [ ] Add code folding
- [ ] Make it throw lava errors based on the schema

## Prerequisites

Before you can use Lava Runner, make sure you have the following:

- **Visual Studio Code:** Ensure you have the latest version of VSCode installed.
- **RockRMS Installation:** A live installation of the RockRMS church management system is required. Lava Runner will interact with this system to execute your Lava code.

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for `Lava Runner`.
4. Click on the `Install` button.

![image](https://github.com/user-attachments/assets/feb6316d-bbcb-4ce4-acac-e2bfa225d166)

## Configuration

To use Lava Runner, you need to configure it to communicate with your RockRMS server:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Type `Lava Runner: Configure` and press Enter.
3. Enter the URL of your RockRMS server and any necessary authentication details.

## Usage

Once configured, running Lava code is simple:

1. Open the Lava file you wish to execute in VSCode.
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
3. Type `Lava Runner: Execute` and press Enter.
4. The code will be sent to your RockRMS server for execution, and the results will be displayed in the preview window.

## Security Note

Ensure that your RockRMS server is properly secured and that API access is restricted to authorized users only. Lava Runner sends your code over the network, so it's crucial to protect your data and your server.

## Support

For support, feature requests, or bug reports, please visit the [Lava Runner GitHub repository](https://github.com/pbassham/lava-runner) and open an issue.

## Contributing to Lava Runner
You can contribute to Lava Runner by submitting a pull request. 

### Some tips on getting started:
1. The main configuration for adding views, settings, and commands is in the `package.json` file. The `contributes` section is where feature settings are added.
2. The main code for the extension is in the `src` folder. The `extension.ts` file is the entry point for the extension.
3. The `src/entitiesProvider.ts` file is where the entity tree view is created.
4. This extension was bootstrapped using the [VSCode Extension Generator](https://code.visualstudio.com/api/get-started/your-first-extension). Read the [VSCode API documentation](https://code.visualstudio.com/api) to learn more about how to configure features.


## License

Lava Runner is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Enjoy more efficient Lava code development with Lava Runner for VSCode!
