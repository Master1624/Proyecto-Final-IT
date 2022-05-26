using Microsoft.AspNetCore.Mvc;
using Balones.Models;
using Balones.Persistencia;

namespace Balones.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class BalonesController:ControllerBase
    {
        private readonly ContextoBalon _context;
        public BalonesController(ContextoBalon contexto)
        {
            _context = contexto;
        }
        [HttpPost]
        public bool AgregarNuevoRegistro(MarcaBalon marca)
        {
            _context.Add(marca);
            _context.SaveChanges();
            return true;
        }
        [HttpGet]
        public List<MarcaBalon> Balones()
        {
            return _context.MarcasBalones.ToList();
        }
        [HttpDelete]
        public bool BorrarRegistro(int IdMarcaBalon)
        {
            var registro = _context.MarcasBalones.FirstOrDefault(marca => marca.IdMarcaBalon == IdMarcaBalon);
            _context.MarcasBalones.Remove(registro);
            _context.SaveChanges();
            return true;
        }
        [HttpPut]
        public bool ActualizarRegistro(int IdMarcaBalon, MarcaBalon marca)
        {
            var registro = _context.MarcasBalones.FirstOrDefault(marca => marca.IdMarcaBalon == IdMarcaBalon);
            if(registro != null)
            {
                _context.MarcasBalones.Remove(registro);
                _context.Add(marca);
                _context.SaveChanges();
            }
            return true;
        }
    }
}
