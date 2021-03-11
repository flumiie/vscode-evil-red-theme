import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {
  const extensionName = 'fralyx.evil-red-theme';
  const cmdGetPath = `${extensionName}.getPath`;

  const getPathHandler = () => {
    console.log('hello');
  };

  const addCommentHandler = () => {
    vscode.commands.executeCommand('editor.action.addCommentLine');
  };

  context.subscriptions.push(
    vscode.commands.registerCommand(cmdGetPath, getPathHandler)
  );
};
