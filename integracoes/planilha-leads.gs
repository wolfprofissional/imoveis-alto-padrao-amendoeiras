/**
 * Recebe os leads da landing page e grava na aba "Leads".
 *
 * Como instalar (uma vez só):
 * 1. Abra a planilha de leads → Extensões → Apps Script.
 * 2. Apague o conteúdo do editor, cole este arquivo e salve.
 * 3. Implantar → Nova implantação → tipo "App da Web".
 *    Executar como: Eu · Quem pode acessar: Qualquer pessoa.
 * 4. Autorize, copie a URL que termina em /exec e cole em
 *    assets/js/config.js → planilhaWebhook: "COLE_AQUI".
 */

var ABA = 'Leads';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents || '{}');
    var aba = SpreadsheetApp.getActive().getSheetByName(ABA);
    var limpa = function (v) { return String(v == null ? '' : v).replace(/^[=+\-@]/, "'$&").slice(0, 300); };

    aba.appendRow([
      new Date(),
      limpa(d.imovel),
      limpa(d.nome),
      limpa(d.telefone),
      limpa(d.objetivo),
      limpa(d.prazo),
      limpa(d.pagamento),
      limpa(d.faixa),
      limpa(d.temperatura),
      limpa(d.corretor),
      limpa(d.origem),
      'Novo',
      '',
      ''
    ]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('erro: ' + err);
  } finally {
    lock.releaseLock();
  }
}
