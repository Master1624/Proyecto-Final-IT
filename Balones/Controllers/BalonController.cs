using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Balones.Models;
using Balones.Persistencia;

namespace Balones.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BalonesController : ControllerBase
    {
        private readonly ContextoBalon _context;
        public BalonesController(ContextoBalon contexto)
        {
            _context = contexto;
        }
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.MarcasBalones.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{IdMarcaBalon}", Name = "GetBalon")]
        public ActionResult Get(int IdMarcaBalon)
        {
            try
            {
                var registro = _context.MarcasBalones.FirstOrDefault(balon => balon.IdMarcaBalon == IdMarcaBalon);
                return Ok(registro);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public ActionResult Post(MarcaBalon marca)
        {
            try
            {
                _context.Add(marca);
                _context.SaveChanges();
                return CreatedAtRoute("GetBalon", new { IdMarcaBalon = marca.IdMarcaBalon }, marca);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{IdMarcaBalon}")]
        public ActionResult Put(int IdMarcaBalon, MarcaBalon marca)
        {
            try
            {
                if (marca.IdMarcaBalon == IdMarcaBalon)
                {
                    _context.Entry(marca).State = EntityState.Modified;
                    _context.SaveChanges();
                    return CreatedAtRoute("GetBalon", new { IdMarcaBalon = marca.IdMarcaBalon }, marca);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{IdMarcaBalon}")]
        public ActionResult Delete(int IdMarcaBalon)
        {
            try
            {
                var registro = _context.MarcasBalones.FirstOrDefault(marca => marca.IdMarcaBalon == IdMarcaBalon);
                if (registro != null)
                {
                    _context.MarcasBalones.Remove(registro);
                    _context.SaveChanges();
                    return Ok(IdMarcaBalon);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
