# Lava-Runner README

This 

- [ ] TODO: Add a link to the LAVA documentation
- [ ] TODO: Make it throw lava errors based on the schema

## Features

# Lava Runner for VSCode

Welcome to **Lava Runner** for VSCode, an extension designed specifically for developers working with Lava code in the context of the RockRMS church management system. This powerful extension enables you to run Lava code remotely on a RockRMS server, directly from your local development environment. With Lava Runner, you can effortlessly execute your code and view the results through a convenient preview window, all without leaving the comfort of VSCode.

## Features

- **Remote Execution:** Send the current Lava file as the body of an API call to a RockRMS server for execution.
- **Real-time Results:** View execution results in a dedicated preview window within VSCode.
- **Streamlined Workflow:** Eliminates the need for manual file transfers or separate testing environments, making your development process faster and more efficient.
- **Secure Connection:** Utilizes secure API calls to ensure your code and data remain protected.

## Prerequisites

Before you can use Lava Runner, make sure you have the following:

- **Visual Studio Code:** Ensure you have the latest version of VSCode installed.
- **RockRMS Installation:** A live installation of the RockRMS church management system is required. Lava Runner will interact with this system to execute your Lava code.

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for `Lava Runner`.
4. Click on the `Install` button.

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

For support, feature requests, or bug reports, please visit the [Lava Runner GitHub repository](https://github.com/your-repo/lava-runner) and open an issue.

## License

Lava Runner is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Enjoy more efficient Lava code development with Lava Runner for VSCode!