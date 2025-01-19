function parsePageToJSON() {
    const items = [];
    const tables = document.querySelectorAll('table');
  
    tables.forEach((table) => {
      const item = {};
      const rows = table.querySelectorAll('tr');
  
      if (rows.length > 1) {
        item.Nome = rows[0].querySelector('b') ? rows[0].querySelector('b').textContent.trim() : '';
        item.PoderDeAtaque = rows[1] ? rows[1].textContent.replace('Poder de Ataque: ', '').trim() : '';
        item.VelocidadeDaArma = rows[2] ? rows[2].textContent.replace('Vel. da Arma: ', '').trim() : '';
        item.Critico = rows[3] ? rows[3].textContent.replace('Crítico: ', '').trim() : '';
        item.TaxaDeAtaque = rows[4] ? rows[4].textContent.replace('Taxa de Ataque: ', '').trim() : '';
        item.Bloqueio = rows[5] ? rows[5].textContent.replace('Bloqueio: ', '').trim() : '';
        item.Bonus = rows[6] ? rows[6].textContent.replace('Bônus:', '').trim() : '';
        item.NivelNecessario = rows[7] ? rows[7].textContent.replace('Nível Necessário: ', '').trim() : '';
        item.ForcaNecessaria = rows[8] ? rows[8].textContent.replace('Força Necessária: ', '').trim() : '';
        item.TalentoNecessario = rows[9] ? rows[9].textContent.replace('Talento Necessário: ', '').trim() : '';
        item.PoderDeAtqAdicional = rows[10] ? rows[10].textContent.replace('P. de ATQ Adicional: ', '').trim() : '';
        item.TaxaDeAtqAdicional = rows[11] ? rows[11].textContent.replace('Taxa de ATQ ad: ', '').trim() : '';
        item.CriticoAdicional = rows[12] ? rows[12].textContent.replace('Crítico Adicional: ', '').trim() : '';
        item.SpecATQSPD = rows[13] ? rows[13].textContent.replace('Spec. ATQ SPD: ', '').trim() : '';
  
        items.push(item);
      }
    });
  
    return JSON.stringify(items, null, 2);
  }
  
  // Execute no console do navegador
  console.log(parsePageToJSON());
  