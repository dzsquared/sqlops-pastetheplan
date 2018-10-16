'use strict';
import * as vscode from 'vscode';
import * as request from 'request-promise-native';
import * as sqlops from 'sqlops';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "pastetheplan" is now active!');

    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', () => {
        vscode.window.showInformationMessage('Hello World!');
    }));

    // context.subscriptions.push(vscode.commands.registerCommand('extension.pastePlan', () => {
    //     vscode.window.showInformationMessage('started paste the plan');
    // }));

    var pasteThePlan = async () => {
        vscode.window.showInformationMessage('starting the ptp');
        var planXML = vscode.window.activeTextEditor.document.getText();
        vscode.window.showInformationMessage('GOT THE XML');
        // var options = {
        //     uri: 'https://jeczi7iqj8.execute-api.us-west-2.amazonaws.com/prod/',
        //     body: {"queryplan_xml": planXML},
        //     json: true
        // };
        // try {
        //     console.log('Pasting the plan.');
        //     const pastedPlan = await request.post(planXML); 
        //     vscode.window.showInformationMessage("called PTP");      
        //     vscode.window.showInformationMessage(pastedPlan.id)
        // } catch (err) {
        //     vscode.window.showErrorMessage(err);
        // }
    };
    var disposable_ptp = vscode.commands.registerCommand('extension.pastePlan', pasteThePlan);
    context.subscriptions.push(disposable_ptp);
}

// this method is called when your extension is deactivated
export function deactivate() {
}