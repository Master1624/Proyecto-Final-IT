using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Uniformes.Models;
using Uniformes.Persistencia;

namespace Uniformes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UniformesController : ControllerBase
    {
        private readonly ContextoUniforme _contexto;
        public UniformesController(ContextoUniforme contexto)
        {
            _contexto = contexto;
        }
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_contexto.UniformesBaloncesto.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{IdUniforme}", Name = "GetUniforme")]
        public ActionResult Get(int IdUniforme)
        {
            try
            {
                var registro = _contexto.UniformesBaloncesto.FirstOrDefault(uniforme => uniforme.IdUniforme == IdUniforme);
                return Ok(registro);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public ActionResult Post(UniformeB uniforme)
        {
            try
            {
                _contexto.Add(uniforme);
                _contexto.SaveChanges();
                return CreatedAtRoute("GetUniforme", new { IdUniforme = uniforme.IdUniforme }, uniforme);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{IdUniforme}")]
        public ActionResult Put(int IdUniforme, UniformeB uniforme)
        {
            try
            {
                if (uniforme.IdUniforme == IdUniforme)
                {
                    _contexto.Entry(uniforme).State = EntityState.Modified;
                    _contexto.SaveChanges();
                    return CreatedAtRoute("GetUniforme", new { IdUniforme = uniforme.IdUniforme }, uniforme);
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
        [HttpDelete("{IdUniforme}")]
        public ActionResult Delete(int IdUniforme)
        {
            try
            {
                var registro = _contexto.UniformesBaloncesto.FirstOrDefault(uniforme => uniforme.IdUniforme == IdUniforme);
                if (registro != null)
                {
                    _contexto.UniformesBaloncesto.Remove(registro);
                    _contexto.SaveChanges();
                    return Ok(IdUniforme);
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
