
    const usuarioCorreto = "cardozocosta514@gmail.com";
    const senhaCorreta = "122529";

    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // impede envio automático do formulário

      const usuario = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Redireciona para outra página
        window.location.href = "pagina.html";
      } else {
        alert("Usuário ou senha incorretos!");
      }
    });
