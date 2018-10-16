'use strict';
import * as vscode from 'vscode';
import * as request from 'request-promise-native';
import * as sqlops from 'sqlops';
import { open } from 'fs';

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
        if (vscode.window.activeTextEditor.document.languageId === 'xml') {
            var planXML = vscode.window.activeTextEditor.document.getText();
            vscode.window.showInformationMessage('GOT THE XML');
            sendToPTP(planXML);
        } else {
            vscode.window.showInformationMessage('sorry, Paste the Plan connector is supported for XML files only');
        }
    };
    var disposable_ptp = vscode.commands.registerCommand('extension.pastePlan', pasteThePlan);
    context.subscriptions.push(disposable_ptp);

    async function sendToPTP(planXML){
        try {
            var options = {
            uri: 'https://jeczi7iqj8.execute-api.us-west-2.amazonaws.com/prod/',
            body: {"queryplan_xml": planXML},
            json: true
        };
        const pastedPlan = await request.post(options); 
        vscode.window.showInformationMessage('called PTP');      
        vscode.window.showInformationMessage(pastedPlan.id);
        var newPTPlink = 'https://www.brentozar.com/pastetheplan/?id='+pastedPlan.id;
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(newPTPlink));
        } catch (err) {
            vscode.window.showErrorMessage(err);
        }
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}