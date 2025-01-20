const parseArmorData = () => {
    const armorData = [];
    
    const rows = document.querySelectorAll('table tr');
    let armor = {};
  
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      cells.forEach(cell => {
        const text = cell.textContent.trim();
  
        if (text.includes('Roupão')) {
          if (Object.keys(armor).length > 0) armorData.push(armor);
          armor = { name: text };
        }
        if (text.includes('Taxa de Defesa')) armor.defense = text;
        if (text.includes('Absorção')) armor.absorption = text;
        if (text.includes('Res. Orgânica')) armor.organicResistance = text;
        if (text.includes('Res. a Fogo')) armor.fireResistance = text;
        if (text.includes('Res. a Gelo')) armor.iceResistance = text;
        if (text.includes('Res. a Raio')) armor.thunderResistance = text;
        if (text.includes('Res. a Veneno')) armor.poisonResistance = text;
        if (text.includes('Nível Necessário')) armor.requiredLevel = text;
        if (text.includes('Força Necessária')) armor.requiredStrength = text;
        if (text.includes('Talento Necessário')) armor.requiredTalent = text;
        if (text.includes('Def. Adicional')) armor.additionalDefense = text;
        if (text.includes('Abs Adicional')) armor.additionalAbsorption = text;
      });
    });
  
    if (Object.keys(armor).length > 0) armorData.push(armor);
    
    console.log(JSON.stringify(armorData, null, 2));
  };
  
  parseArmorData();
  