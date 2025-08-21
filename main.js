const { Plugin, Menu, Notice } = require('obsidian');

class CopyAbsolutePathPlugin extends Plugin {
	getTexts() {
		const locale = this.app.vault.getConfig('userLocale') ||
			window.localStorage.getItem('language') ||
			navigator.language ||
			'en';
		const isSpanish = locale.startsWith('es');
		return {
			menuTitle: isSpanish ? 'Copiar ruta absoluta' : 'Copy absolute path',
			commandName: isSpanish ? 'Copiar ruta absoluta del archivo actual' : 'Copy absolute path of current file',
			noActiveFile: isSpanish ? 'No hay archivo activo' : 'No active file',
			pathCopied: isSpanish ? 'Ruta copiada: ' : 'Path copied: ',
			copyError: isSpanish ? 'Error al copiar la ruta' : 'Error copying path'
		};
	}
	async onload() {
		this.registerEvent(this.app.workspace.on('file-menu', (menu, file) => { this.addCopyAbsolutePathMenuItem(menu, file); }));
		this.registerEvent(this.app.workspace.on('editor-menu', (menu, editor, view) => { if (view.file) this.addCopyAbsolutePathMenuItem(menu, view.file); }));
		const texts = this.getTexts();
		this.addCommand({ id: 'copy-absolute-path-current-file', name: texts.commandName, callback: () => {
			const activeFile = this.app.workspace.getActiveFile();
			if (activeFile) this.copyAbsolutePath(activeFile); else new Notice(texts.noActiveFile);
		}});
	}
	addCopyAbsolutePathMenuItem(menu, file) {
		const texts = this.getTexts();
		menu.addItem((item) => { item.setTitle(texts.menuTitle).setIcon('copy').onClick(() => { this.copyAbsolutePath(file); }); });
	}
	copyAbsolutePath(file) {
		const texts = this.getTexts();
		const vaultPath = this.app.vault.adapter.basePath || this.app.vault.adapter.path;
		const absolutePath = `${vaultPath}/${file.path}`;
		if (navigator.clipboard) navigator.clipboard.writeText(absolutePath).then(() => { new Notice(`${texts.pathCopied}${absolutePath}`); }).catch(() => { this.fallbackCopyTextToClipboard(absolutePath); });
		else this.fallbackCopyTextToClipboard(absolutePath);
	}
	fallbackCopyTextToClipboard(text) {
		const texts = this.getTexts();
		const textArea = document.createElement('textarea');
		textArea.value = text;
		textArea.style.position = 'fixed';
		textArea.style.left = '-999999px';
		textArea.style.top = '-999999px';
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		try { const successful = document.execCommand('copy'); if (successful) new Notice(`${texts.pathCopied}${text}`); else new Notice(texts.copyError); }
		catch (err) { new Notice(texts.copyError); }
		document.body.removeChild(textArea);
	}
	onunload() {}
}

module.exports = CopyAbsolutePathPlugin;
