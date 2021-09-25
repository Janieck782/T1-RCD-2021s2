package com.main;

import com.model.SplitterResponseModel;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/separar/{input}")
public class SeparadorDeNombres {
    @PathParam("input")
    private String input;

    @GET
    @Produces("application/json")
    public Response separar() {
        List<String> listaNombres = new ArrayList<String>() {
            {
                add("Rafael");
            }
        };

        List<String> listaApellidos = new ArrayList<String>() {
            {
                add("Morales");
                add("Venegas");
            }
        };

        SplitterResponseModel res = new SplitterResponseModel(listaNombres, listaApellidos);

        return Response.ok(res).build();
    }
}

