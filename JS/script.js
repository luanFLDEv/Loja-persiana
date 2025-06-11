
  function enviarPedido() {
    const tipo = document.getElementById("tipo").value;
    const cor = document.getElementById("cor").value;
    const altura = document.getElementById("altura").value;
    const largura=document.getElementById("largura").value;
    
     if (!tipo || !cor || !altura || !largura) {
      alert("Por favor, preencha todos os campos antes de fazer o pedido.");
      return;
    }
    const mensagem = `Olá! Tenho interesse em uma ${tipo}, na cor ${cor}, com metragem de ${altura} altura e ${largura} de largura .`;

    const numeroWhatsApp = "5511998717330";
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
  }
  