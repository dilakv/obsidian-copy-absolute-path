# Copy Absolute Path - Obsidian Plugin

A simple plugin that adds the ability to copy absolute system paths of files and folders directly from Obsidian's context menu.

## Features

- **Right-click context menu**: Copy absolute path from file explorer and editor
- **Command palette**: Access via "Copy absolute path of current file" command
- **Multilingual support**: Automatically detects English/Spanish and adapts interface
- **Cross-platform**: Works on Windows, macOS, and Linux
- **Clipboard fallback**: Uses modern clipboard API with fallback support

## Installation

### From Obsidian Community Plugins
1. Open Obsidian Settings
2. Go to Community Plugins
3. Search for "Copy Absolute Path"
4. Install and enable

### Manual Installation
1. Download the latest release
2. Extract to `.obsidian/plugins/copy-absolute-path/`
3. Enable in Community Plugins settings

## Usage

### Context Menu
- Right-click any file or folder in the file explorer
- Select "Copy absolute path" / "Copiar ruta absoluta"
- The full system path is copied to your clipboard

### Command Palette
- Press `Ctrl/Cmd + P` to open command palette
- Type "Copy absolute path"
- Execute on the currently active file

## Examples

**Input file**: `Personal/Notes/meeting.md`

**Output**: `/Users/username/Documents/MyVault/Personal/Notes/meeting.md`

## Language Support

The plugin automatically detects your system language:
- **English**: Copy absolute path
- **Spanish**: Copiar ruta absoluta

## Compatibility

- **Obsidian**: 1.0.0+
- **Platforms**: Windows, macOS, Linux
- **Mobile**: Not supported (desktop only feature)

## Development
Built with vanilla JavaScript for maximum compatibility and minimal overhead.

## License
MIT License

## Author
dilakv
