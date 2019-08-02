const vscode = require('vscode');
const util = {
  /**
   * 获取配置文件的名称
   */
  getConfigurationName() {
    const config = vscode.workspace.getConfiguration();
    return config.get('link-status-bar.name');
  },
  /**
   * 获取配置文件的名称链接
   */
  getConfigurationLink() {
    const config = vscode.workspace.getConfiguration();
    return config.get('link-status-bar.link');
  }
}

module.exports = util;