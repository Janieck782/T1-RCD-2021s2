package com.main;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/validar/{rut}/{dv}")
public class RutDigitValidator {

    @PathParam("rut")
    private String rut;

    @PathParam("dv")
    private String dv;

    @GET
    @Produces("application/json")
    public String validar() {

        return "{" +
                "\"rut\": \"" + rut + "\", " +
                "\"dv\": \"" + dv
                + "\"}";
    }

}
