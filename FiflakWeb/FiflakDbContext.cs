using FiflakWeb.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FiflakWeb
{
    public class FiflakDbContext: DbContext
    {
        public FiflakDbContext()
            :base("FiflakDb")
        {
        }

        public DbSet<Player> Players { get; set; }

    }
}