import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
    const disposable = vscode.commands.registerCommand(
        "hello-world-example.sayHello",
        async () => {
            const workspaceFolders = vscode.workspace.workspaceFolders;

            if (!workspaceFolders) {
                vscode.window.showErrorMessage(
                    "Please open a workspace or folder first."
                );
                return;
            }

            const workspaceFolder = workspaceFolders[0];
            const fileUri = vscode.Uri.joinPath(
                workspaceFolder.uri,
                "hello.py"
            );

            const content = `print("Hello Ridzwan! Your extension is working!")\n`;

            await vscode.workspace.fs.writeFile(
                fileUri,
                Buffer.from(content, "utf8")
            );

            const document = await vscode.workspace.openTextDocument(fileUri);
            await vscode.window.showTextDocument(document);

            vscode.window.showInformationMessage(
                "hello.py has been created!"
            );
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate(): void {}