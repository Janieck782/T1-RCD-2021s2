package com.main;

import com.model.RutValidatorModel;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.Locale;

@Path("/validar/{rut}/{dv}")
public class RutDigitValidator {

    @PathParam("rut")
    private String rut;

    @PathParam("dv")
    private String dv;

    @GET
    @Produces("application/json")
    public Response validar() {
        int parsed_rut;
        char parsed_dv;
        try {
            parsed_rut = Integer.parseInt(rut);
            parsed_dv = dv.toUpperCase(Locale.ROOT).charAt(0);
        }
        catch (NumberFormatException e) {
            return Response.status(400).build();
        }

        RutValidatorModel res = new RutValidatorModel(parsed_rut, parsed_dv);

        return Response.ok(res).build();
    }

}
