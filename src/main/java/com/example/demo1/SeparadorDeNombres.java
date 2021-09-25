package com.example.demo1;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/separar/{nombre}")
public class SeparadorDeNombres {
    @PathParam("nombre")
    private String nombre;

    @GET
    @Produces("application/json")
    public String separar() {
        return "{}";
    }
}
