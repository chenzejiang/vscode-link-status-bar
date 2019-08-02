const vscode = require('vscode');
const util = require('./util');

module.exports = function(context) {
    context.subscriptions.push(vscode.commands.registerCommand('status-bar.open', (obj) => {
        console.log(util.getConfigurationLink());
        vscode.commands.executeCommand(
            "vscode.open",
            vscode.Uri.parse(util.getConfigurationLink())
        );
    }));
};