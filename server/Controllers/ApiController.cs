using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Server
{

  [Route("/api")]
  [ApiController]
  public class ApiController : Controller
  {
    [HttpGet]
    public ActionResult<List<string>> Get()
    {

        return new List<string>{ "Hello", "World" };
    }
  }
}