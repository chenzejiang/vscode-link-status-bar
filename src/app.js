const vscode = require('vscode');
const util = require('./util');

class App {
    constructor(context){
        this.activateContext = context;
        this.statusBarItems = null;
        this.init();
        context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => this.handleConfigChange()));
    }
    /*
     * 配置文件改变触发
     */
    handleConfigChange() {
        this.statusBarItems.hide();
        this.statusBarItems.dispose();
        this.statusBarItems = null;
        this.init();
    }
    /**
     * 创建statusBar 
     * @param {string} text 
     */
    createStatusBarItem(text = '') {
        const barItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
        barItem.text = text;
        barItem.command = 'status-bar.open';
        barItem.show();
        return barItem;
    }
    /**
     * 创建 statusBarItems
     */
    init() {
        this.statusBarItems = this.createStatusBarItem(util.getConfigurationName());
    }
}
module.exports = App;