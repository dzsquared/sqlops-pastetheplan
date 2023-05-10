# Azure Data Studio - Paste the Plan Extension

This extension is a connector to [Paste the Plan](http://pastetheplan.com).

## Installation
The current release is available to [download as a .vsix file](https://github.com/dzsquared/sqlops-pastetheplan/releases/download/0.2.0/pastetheplan-0.2.0.vsix) and can be installed by opening the command palette (`ctrl/command+shift+p`) and selecting `Extensions: Install from VSIX...`


## Features


Open execution plan XML from a saved execution plan file, an estimated execution plan, an actual execution plan, or embedded in query results such as sp_BlitzCache.

From the open XML file, run either of the commands from the command pallete (`ctrl+shift+p`):
- Paste the Plan: Open in Browser
- Paste the Plan: Copy to Clipboard

![Open in Browser 1](https://github.com/dzsquared/sqlops-pastetheplan/raw/master/images/OpenInBrowser.gif)


![Open in Browser 2](https://github.com/dzsquared/sqlops-pastetheplan/raw/master/images/OpenInBrowser2.gif)


## Requirements

- Internet connectivity

## Privacy

This extension does not store your execution plans or other information locally.  It does send your execution plans to *Paste the Plan*, so you should be familiar with their [privacy and copyright summary](https://www.brentozar.com/pastetheplan/paste-plan-privacy-copyright-summary/)

## Known Issues

Please [submit on GitHub](https://github.com/dzsquared/sqlops-pastetheplan/issues)


## Release Notes

### 0.2.0
- Adds check for execution plan size <2MB
- First release

### 0.1.0
- Preview version

## License

This extension is released under the [MIT License](https://raw.githubusercontent.com/dzsquared/sqlops-pastetheplan/master/LICENSE).
