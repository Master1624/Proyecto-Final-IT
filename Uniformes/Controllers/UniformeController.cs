using Microsoft.AspNetCore.Mvc;
using Uniformes.Models;
using Uniformes.Persistencia;

namespace Uniformes.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class UniformesController:ControllerBase
    {
        private readonly ContextoUniforme _contexto;
        public UniformesController(ContextoUniforme contexto)
        {
            _contexto = contexto;
        }
        [HttpPost]
        public bool AgregarNuevoUniforme(UniformeB uniforme)
        {
            _contexto.Add(uniforme);
            _contexto.SaveChanges();
            return true;
        }
        [HttpGet]
        public List<UniformeB> Uniformes()
        {
            return _contexto.UniformesBaloncesto.ToList();
        }
        [HttpDelete]
        public bool BorrarRegistro(int IdUniforme)
        {
            var registro = _contexto.UniformesBaloncesto.FirstOrDefault(uniforme => uniforme.IdUniforme == IdUniforme);
            if (registro == null) return false;
            else
            {
                _contexto.UniformesBaloncesto.Remove(registro);
                _contexto.SaveChanges();
                return true;
            }
        }
        [HttpPut]
        public bool ActualizarRegistro(int IdUniforme, UniformeB uniforme)
        {
            var registro = _contexto.UniformesBaloncesto.FirstOrDefault(uniforme => uniforme.IdUniforme == IdUniforme);
            if (registro == null) return false;
            else
            {
                _contexto.UniformesBaloncesto.Remove(registro);
                _contexto.Add(uniforme);
                _contexto.SaveChanges();
                return true;
            }
        }
    }
}
