#!/bin/bash
echo "🚀 Installing Copy Absolute Path plugin..."

VAULT_PATH="${1:-$PWD}"
PLUGIN_DIR="$VAULT_PATH/.obsidian/plugins/copy-absolute-path"

if [ ! -d "$VAULT_PATH/.obsidian" ]; then
    echo "❌ Not an Obsidian vault directory"
    exit 1
fi

mkdir -p "$PLUGIN_DIR"

cat > "$PLUGIN_DIR/manifest.json" << 'EOF'
{
	"id": "copy-absolute-path",
	"name": "Copy Absolute Path",
	"version": "1.0.0",
	"minAppVersion": "1.0.0",
	"description": "Adds a context menu option to copy absolute system paths",
	"author": "dilakv"
}
EOF

curl -s "https://raw.githubusercontent.com/dilakv/obsidian-copy-absolute-path/main/main.js" > "$PLUGIN_DIR/main.js"

echo "✅ Plugin installed! Restart Obsidian and enable it in Community Plugins."
