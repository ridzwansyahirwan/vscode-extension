import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
    const disposable = vscode.commands.registerCommand(
        "hello-world-example.sayHello",
        () => {
            vscode.window.showInformationMessage(
                "Hello Ridzwan! Your extension is working!"
            );
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate(): void {
    // No cleanup is required for this extension.
}