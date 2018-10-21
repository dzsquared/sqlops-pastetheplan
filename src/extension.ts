'use strict';
import * as vscode from 'vscode';
import * as request from 'request-promise-native';
import * as sqlops from 'sqlops';
import * as clipboardy from 'clipboardy';
import * as bytelength from 'byte-length';

export function activate(context: vscode.ExtensionContext) {

    var pasteThePlan = async () => {
        if (vscode.window.activeTextEditor.document.languageId === 'xml') {
            var planXML = vscode.window.activeTextEditor.document.getText();
            var planSize = bytelength.byteLength(planXML);
            if (planSize < 2000000) {
                var planLink = await sendToPTP(planXML);
                vscode.window.showInformationMessage('Paste the Plan window opening in your browser.');
                vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(planLink));
            } else {
                vscode.window.showErrorMessage('Sorry, Paste the Plan has a maximum size of 2MB')
            }
        } else {
            vscode.window.showErrorMessage('Sorry, Paste the Plan connector is supported for XML files only.');
        }
    };
    var disposable_ptp = vscode.commands.registerCommand('extension.pastePlan', pasteThePlan);
    context.subscriptions.push(disposable_ptp);

    var pasteThePlanCopy = async () => {
        if (vscode.window.activeTextEditor.document.languageId === 'xml') {
            var planXML = vscode.window.activeTextEditor.document.getText();
            var planSize = bytelength.byteLength(planXML);
            if (planSize < 2000000) {
                var planLink = await sendToPTP(planXML);
                clipboardy.write(planLink);
                vscode.window.showInformationMessage('Paste the Plan link copied to clipboard.');
            } else {
                vscode.window.showErrorMessage('Sorry, Paste the Plan has a maximum size of 2MB')
            }
        } else {
            vscode.window.showErrorMessage('Sorry, Paste the Plan connector is supported for XML files only.');
        }
    };
    var disposable_ptpcopy = vscode.commands.registerCommand('extension.pastePlanCopy', pasteThePlanCopy);
    context.subscriptions.push(disposable_ptpcopy);

    async function sendToPTP(planXML){
        try {
            var options = {
            uri: 'https://jeczi7iqj8.execute-api.us-west-2.amazonaws.com/prod/',
            body: {"queryplan_xml": planXML},
            json: true
        };
        const pastedPlan = await request.post(options);      
        //vscode.window.showInformationMessage(pastedPlan.id);
        var newPTPlink = 'https://www.brentozar.com/pastetheplan/?id='+pastedPlan.id;
        return newPTPlink;
        } catch (err) {
            vscode.window.showErrorMessage(err);
        }
    }
}

export function deactivate() {
}