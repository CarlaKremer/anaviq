const estados = document.querySelector('#estados');
const API_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos"

document.addEventListener('DOMContentLoaded', function() {
    const instance = M.FormSelect.getInstance(estados)
    instance.destroy()
    await pegarEstados()
    M.FormSelect.init(estados)
  });

  const pegarEstados = async () => {
    const data = await fetch()
        .then(resp => resp.json()).catch(error => false)
    if(!data) return
    
  }