# Change Log

All notable changes to the "lava-runner" extension will be documented in this file.
## [0.5.1]
- Fixed the chart.js and font awesome scripts to be included in the preview panel

## [0.5.0]
- Added Configuration options for the preview panel
- Prepend and Append Lava to each request so that it is included in each response. Allows you to add Lava to be run at the beginning and end of each request. This is useful for setting variables that you want to use in each request.
- Head: Added setting to set additional content that will be included in the `<head>` of the preview panel
- Body: Added setting to set additional content that will be included beginning and end of the `<body>` tag of the preview panel. 
- Organized Settings better into sections

## [0.3.1]
- Added chart.js script to be able to use the Chart.js library in the preview
- Added setting to be able to set the Chart.js script path

## [0.3.0]
- Enabled find in the preview panel to find text (cmd+f)
- Enabled scripts RockJQueryLatest, RockUI, and RockLibs to be included in the preview. This allows things like the collapsable panels, like when using `{{ '' | Debug }}` to work in the preview.
- Added keyboard shortcut to run the current Lava file (cmd+alt+L)
- Add font awesome support to the preview and a setting to set the font awesome path

## [0.2.0]
- Add setting to set the css path for the preview (Thanks Michael Allen!)

## [0.1.1]
- Update README with preview images

## [0.1.0]
- Wrap the preview html in a <base> tag to allow relative links to work
- Add Boostrap and theme css to the preview
- Add Entity Tree View to list all entities in the Rock instance

## [0.0.1]

- Initial release