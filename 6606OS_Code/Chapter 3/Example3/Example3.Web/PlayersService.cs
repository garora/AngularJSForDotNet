﻿using System.Collections.Generic;
using System.Linq;
using ServiceStack.ServiceHost;

namespace Example3.Web
{
    public class PlayersService : IService
    {
        public List<Player> Get(GetPlayers request)
        {
            return GetPlayers();
        }

        public Player Get(GetPlayer request)
        {
            return GetPlayers().Single(p => p.Id == request.Id);
        }

        private List<Player> GetPlayers()
        {
            return new List<Player>
            {
                new Player{ Id= 1, FirstName="Angela", LastName = "Evans"},
                new Player{ Id= 2, FirstName="Jack", LastName = "Marshall"},
            };
        }
    }

    [Route("/players", "GET")]
    public class GetPlayers : IReturn<List<Player>>
    {
    }

    [Route("/players/{Id}", "GET")]
    public class GetPlayer : IReturn<Player>
    {
        public int Id { get; set; }
    }

    public class Player
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}